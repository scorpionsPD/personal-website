#!/usr/bin/env python3
from __future__ import annotations

import argparse
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, unquote


class NextExportHandler(SimpleHTTPRequestHandler):
    def resolve_clean_url(self) -> Path | None:
        request_path = unquote(urlsplit(self.path).path)
        normalized = request_path.rstrip("/")
        if normalized in {"", "/"}:
            html_candidate = Path(self.directory) / "index.html"
        else:
            html_candidate = Path(self.directory) / f"{normalized.lstrip('/')}.html"

        if html_candidate.exists():
            return html_candidate

        return None

    def translate_path(self, path: str) -> str:
        resolved = super().translate_path(path)
        candidate = Path(resolved)

        if candidate.exists():
            return str(candidate)

        html_candidate = self.resolve_clean_url()
        if html_candidate is not None:
            return str(html_candidate)

        return str(candidate)

    def send_head(self):
        html_candidate = self.resolve_clean_url()
        if html_candidate is not None:
            file_handle = html_candidate.open("rb")
            file_stat = html_candidate.stat()
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-type", self.guess_type(str(html_candidate)))
            self.send_header("Content-Length", str(file_stat.st_size))
            self.send_header("Last-Modified", self.date_time_string(file_stat.st_mtime))
            self.end_headers()
            return file_handle

        return super().send_head()


def main() -> None:
    parser = argparse.ArgumentParser(description="Serve a Next.js static export with clean URLs.")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=3000)
    parser.add_argument("--root", default="out")
    args = parser.parse_args()

    root = Path(args.root).resolve()
    handler = partial(NextExportHandler, directory=str(root))

    with ThreadingHTTPServer((args.host, args.port), handler) as httpd:
        print(f"Serving {root} at http://{args.host}:{args.port}")
        httpd.serve_forever()


if __name__ == "__main__":
    main()

# Giscus setup

This site uses Giscus for no-cost article comments and reactions through GitHub Discussions.

## Required GitHub setup

1. Enable Discussions on `scorpionsPD/personal-website`.
2. Install the Giscus GitHub app for the repository.
3. Create or choose a Discussions category, usually `General`.
4. Use https://giscus.app/ to generate the repository and category IDs.

## Required environment variables

Set these in the deployment environment:

```txt
NEXT_PUBLIC_GISCUS_REPO=scorpionsPD/personal-website
NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDORP0ADA
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDORP0ADM4C-4yu
```

The component includes these public values as defaults. Set the environment variables only if the repository or category changes later.

# 📁 Where to Place Your Images and Videos

## Directory Structure Created

```
public/
├── images/
│   ├── awards/
│   │   ├── forttuna-award.jpg          ← Place Forttuna award photo here
│   │   └── indian-tech-society-award.jpg ← Place Indian Tech Society award photo here
│   └── speaking/
│       ├── pnb-metlife.jpg             ← Place PNB MetLife event photo here
│       └── university-lecture.jpg      ← Place university lecture photo here
└── videos/
    └── forttuna-award.mp4              ← Place Forttuna award video here (portrait format is fine)
```

## 📸 File Placement Instructions

### 1. **Forttuna Award** (Photo & Video)
- **Photo:** `/public/images/awards/forttuna-award.jpg`
- **Video:** `/public/videos/forttuna-award.mp4`
- **Displays on:** Impact page - Awards section (featured with video player)

### 2. **Indian Tech Society Award** (Photo)
- **File:** `/public/images/awards/indian-tech-society-award.jpg`
- **Displays on:** Impact page - Awards section

### 3. **PNB MetLife Event** (Photo)
- **File:** `/public/images/speaking/pnb-metlife.jpg`
- **Displays on:** Impact page - Professional Impact section

### 4. **University Lecture** (Photo)
- **File:** `/public/images/speaking/university-lecture.jpg`
- **Displays on:** Impact page - Professional Impact section

## ✅ What Happens After You Add Files

Once you place your images and video in these folders:

1. **Images will automatically appear** on the Impact page below each corresponding achievement
2. **Forttuna video will have a video player** with play controls
3. **All media is optimized** using Next.js Image component for fast loading
4. **Responsive design** - images look good on all screen sizes

## 🎨 File Format Recommendations

### Photos
- **Accepted formats:** JPG, PNG, WebP
- **Recommended:** JPG for photos
- **Resolution:** 1200-2000px width minimum
- **File size:** Try to keep under 1MB (compress if needed)

### Video
- **Format:** MP4 (H.264 codec)
- **Portrait orientation:** OK (will display properly)
- **Resolution:** 1080p recommended
- **File size:** Under 50MB preferred

## 🔄 After Adding Files

1. Drop your files into the folders above
2. Make sure filenames match exactly (case-sensitive)
3. Refresh your browser at http://localhost:3000/impact
4. Your images and video will appear automatically!

## 📝 File Naming Tips

✅ **Correct:**
- `forttuna-award.jpg`
- `university-lecture.jpg`

❌ **Wrong:**
- `Forttuna Award.jpg` (spaces and capitals)
- `ForttunаAward.JPG` (wrong case)

---

**Need help?** If images don't show up, check:
1. Filename spelling matches exactly
2. Files are in correct folders
3. Browser cache (try hard refresh: Cmd+Shift+R)

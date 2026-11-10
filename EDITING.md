# Customer Editing Guide — sairam (Koushik & Harshitha)

This template is an emerald-and-gold themed wedding invitation featuring an animated curtain seal intro, watercolour couple hero portrait, countdown timer, event highlights, and venue map preview.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week10/sairam/editable/wedding-data.js)

### Couple Profiles (Groom & Bride)
Edit `couple.groom` and `couple.bride` in `editable/wedding-data.js`:
- `name`: Short first name (e.g. `"Koushik"`, `"Harshitha"`)
- `fullName`: Full legal/ceremonial name (e.g. `"Chi. Ry. Koushik B. R."`, `"Chi. Sou. Harshitha D. R."`)
- `line`: Parentage line (e.g. `"Son of Smt. Shanthamma & Sri Ravi B.K."`)
- `note`: Personal qualifications and family info
- `photo`: Path to portrait photo (defaults to `./editable/assets/groom.png` and `./editable/assets/bride.png`)

### Wedding Date & Times
Edit `wedding` block in `editable/wedding-data.js`:
- `dateISO`: Start time in ISO 8601 (`"2026-11-22T09:20:00+05:30"`) — drives countdown timer and calendar export
- `endISO`: End time in ISO 8601 (`"2026-11-22T14:30:00+05:30"`)
- `dateLabel`: Formatted date (e.g. `"Sunday, 22nd November 2026"`)
- `dateShort`: Short date (e.g. `"22 · 11 · 2026"`)
- `timeLabel`: e.g. `"11:30 AM Onwards"`
- `muhurthamLabel`: e.g. `"9:20 AM to 10:00 AM"`
- `footerDateLocation`: Bottom signoff (e.g. `"22 · 11 · 2026 · Hassan"`)

### Venue & Maps
Edit `venue` block in `editable/wedding-data.js`:
- `name`: Venue display name (`"Sri Shakunadri Kalyana Mantapa"`)
- `address`: Full postal address (`"Arasikere Road, Katihalli, Hassan - 573201"`)
- `locationShort`: City/State for hero section (`"Hassan, Karnataka"`)
- `mapsUrl`: Google Maps link for directions button

### Beegara Outhana Kuta
Edit `beegaraOuthana` block in `editable/wedding-data.js`:
- `title`: `"Beegara Outhana Kuta"`
- `date`: `"Sunday, 13th December 2026"`
- `time`: `"12:00 PM Onwards"`
- `venue`: `"Groom's Residence, Bananduru, Bidadi Hobli, Bengaluru South - 562109"`

### Images
Replace files directly in `editable/assets/` or update paths in `editable/wedding-data.js`:
- Couple hero photo: `editable/assets/couple-hero.png`
- Groom photo: `editable/assets/groom.png`
- Bride photo: `editable/assets/bride.png`
- Map preview image: `editable/assets/map-preview.jpg`

---

## Special Sections & Features

- **Split Curtain Seal Opener**: Opens with smooth slide animation upon tapping "Open the invitation".
- **Floating Garland & Petals**: Background floral garland parallax in the hero section.
- **Live Countdown**: Animated countdown with days, hours, minutes, seconds.
- **iCal / Google Calendar**: Automatically generates `.ics` event from `dateISO` and `venue`.

---

## Rules for Future Agents

1. Make edits in `editable/wedding-data.js` and swap files in `editable/assets/`.
2. Verify syntax with `node --check editable/wedding-data.js` after making edits.

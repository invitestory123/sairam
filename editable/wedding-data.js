/**
 * wedding-data.js — Customer-facing editable data layer for kerala-sands
 * Edit this file to update couple names, bios, wedding dates, times, venue details, and images.
 */

window.WEDDING_DATA = {
  blessing: "|| Sri Lakshmi Venkateshwara Swamy Prasanna ||",

  couple: {
    groom: {
      name: "Koushik",
      fullName: "Chi. Ry. Koushik B. R.",
      line: "Son of Smt. Shanthamma & Sri Ravi B.K.",
      note: "B.E., L.L.B • Grandson of Late Smt. Jayamma & Late Sri General Kariyappa • Bananduru, Bidadi Hobli, Bengaluru South - 562109",
      photo: "./editable/assets/groom.png",
    },
    bride: {
      name: "Harshitha",
      fullName: "Chi. Sou. Harshitha D. R.",
      line: "Daughter of Smt. Manjula & Sri Ramesh",
      note: "M.A., B.Ed • Doddagenigere, Hassan",
      photo: "./editable/assets/bride.png",
    },
  },

  wedding: {
    dateISO: "2026-11-22T09:20:00+05:30",
    endISO: "2026-11-22T14:30:00+05:30",
    dateLabel: "Sunday, 22nd November 2026",
    dateShort: "22 · 11 · 2026",
    saveDateDay: "22",
    saveDateMonthYear: "November 2026",
    timeLabel: "11:30 AM Onwards",
    muhurthamLabel: "9:20 AM to 10:00 AM",
    footerDateLocation: "22 · 11 · 2026 · Hassan",
  },

  venue: {
    name: "Sri Shakunadri Kalyana Mantapa",
    address: "Arasikere Road, Katihalli, Hassan - 573201",
    locationShort: "Hassan, Karnataka",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sri+Shakunadri+Kalyana+Mantapa+Arasikere+Road+Katihalli+Hassan",
  },

  beegaraOuthana: {
    title: "Beegara Outhana Kuta",
    date: "Sunday, 13th December 2026",
    time: "12:00 PM Onwards",
    venue: "Groom's Residence, Bananduru, Bidadi Hobli, Bengaluru South - 562109",
  },

  footerNote: "Awaiting your gracious presence with family & friends — Smt. Shanthamma & Sri Ravi B.K.",

  bgm: "./editable/assets/bgm.mp3",

  images: {
    coupleHero: "./editable/assets/couple-hero.png",
    mapPreview: "./editable/assets/map-preview.jpg",
  },
};

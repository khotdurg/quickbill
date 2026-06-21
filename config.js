// ===========================================================
// QUICKBILL CONFIG — fill this in once after you create your
// Google OAuth Client ID (see SETUP.md for step-by-step instructions).
// Every person who uses this app shares the SAME Client ID below,
// but each person signs in with THEIR OWN Google account and data
// is stored in THEIR OWN Google Drive — never shared between users
// unless they choose to share the Drive file/folder themselves.
// ===========================================================
const GOOGLE_CLIENT_ID = "124931782063-08q4b448s4d53q3o60nookkra7uda1pl.apps.googleusercontent.com";

// Name of the folder this app creates inside each user's "My Drive"
const DRIVE_FOLDER_NAME = "QuickBill Data";
// Name of the database file inside that folder
const DRIVE_FILE_NAME = "quickbill-database.json";

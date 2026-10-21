-- قاعدة بيانات موقع «ألماني من الصفر» (Cloudflare D1 / SQLite)

-- الحسابات
CREATE TABLE IF NOT EXISTS users (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  email       TEXT NOT NULL UNIQUE COLLATE NOCASE,
  name        TEXT NOT NULL DEFAULT '',
  pass_hash   TEXT NOT NULL,
  salt        TEXT NOT NULL,
  role        TEXT NOT NULL DEFAULT 'student',   -- student | editor | admin
  created_at  INTEGER NOT NULL,
  last_seen   INTEGER
);

CREATE TABLE IF NOT EXISTS sessions (
  token_hash  TEXT PRIMARY KEY,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at  INTEGER NOT NULL,
  expires_at  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_user ON sessions(user_id);

CREATE TABLE IF NOT EXISTS login_attempts (
  email TEXT NOT NULL COLLATE NOCASE,
  at    INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS login_attempts_email ON login_attempts(email, at);

-- تقدّم الطالب: كل مفتاح من بيانات المتصفح في صف (الدروس، البطاقات، النقاط، الأخطاء...)
CREATE TABLE IF NOT EXISTS progress (
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  key         TEXT NOT NULL,
  value       TEXT NOT NULL,
  updated_at  INTEGER NOT NULL,
  PRIMARY KEY (user_id, key)
);

-- المحتوى: كلمات القاموس (قابلة للتعديل من لوحة التحكم)
CREATE TABLE IF NOT EXISTS words (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  level      TEXT NOT NULL,              -- A1 A2 B1 B2 C1 C2
  pos        INTEGER NOT NULL DEFAULT 0, -- الترتيب داخل المستوى
  gender     TEXT NOT NULL DEFAULT '',   -- '' m f n p
  word       TEXT NOT NULL,
  meaning    TEXT NOT NULL,
  pron       TEXT NOT NULL DEFAULT '',
  ex_de      TEXT NOT NULL DEFAULT '',
  ex_ar      TEXT NOT NULL DEFAULT '',
  plural     TEXT NOT NULL DEFAULT '',
  updated_at INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS words_level ON words(level, pos);
CREATE INDEX IF NOT EXISTS words_word ON words(word);

-- المحتوى: باقي الملفات كمستندات JSON (الدروس، المواضيع، الأفعال، التمارين، الموضوعات، الحوارات، النماذج، معاني البحث)
CREATE TABLE IF NOT EXISTS docs (
  name        TEXT PRIMARY KEY,
  body        TEXT NOT NULL,
  updated_at  INTEGER NOT NULL,
  updated_by  INTEGER
);

-- إعدادات عامة (نسخة المحتوى، أسماء مستويات القاموس...)
CREATE TABLE IF NOT EXISTS meta (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

-- سجل التعديلات في لوحة التحكم
CREATE TABLE IF NOT EXISTS audit (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id  INTEGER,
  action   TEXT NOT NULL,
  target   TEXT NOT NULL DEFAULT '',
  at       INTEGER NOT NULL
);

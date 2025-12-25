--users table
CREATE TABLE users
(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT NOW
  ()
);

--Products table
CREATE TABLE products
(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  stock INTEGER NOT NULL,
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Sales table
CREATE table sales
(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  total_amount NUMERIC(10,2),
  payment_method TEXT,
  payment_status TEXT DEFAULT 'pending',
  created_by UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);






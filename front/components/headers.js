import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userStatus = localStorage.getItem('isLoggedIn');
    if (userStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Нүүр хуудас</Link></li>
          <li><Link href="/about">Танилцуулга</Link></li>
          
          {!isLoggedIn ? (
            <>
              <li><Link href="/login">Нэвтрэх</Link></li>
              <li><Link href="/signup">Бүртгүүлэх</Link></li>
            </>
          ) : (
            <>
              <li><Link href="/profile">Миний мэдээлэл</Link></li>
              <li><button onClick={handleLogOut}>Гарах</button></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

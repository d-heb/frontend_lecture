DROP DATABASE IF EXISTS book_db;
CREATE DATABASE book_db COLLATE  'utf8_general_ci';


-- 사용자 추가
GRANT ALL ON book_db.* TO userbook@localhost IDENTIFIED BY 'userbook';
FLUSH PRIVILEGES;



-- 데이터베이스 변경
USE book_db;

-- 
DROP TABLE IF EXISTS book;
CREATE TABLE book (
    book_id     int  NOT  NULL  auto_increment,
    title       NVARCHAR(50),
    publisher   NVARCHAR(30),
    year        NVARCHAR(10),
    price       int,
    dtm         DATE,
    use_yn      TINYINT(1) NOT NULL DEFAULT 0,
    authid      int,

    PRIMARY KEY(book_id)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB  ;

INSERT INTO book (title, publisher, year, price, dtm, use_yn, authid)
            VALUES('Operating System', 'Wiley', '2003', 30700, '2004-01-01', 0, 1 ) ;
INSERT INTO book (title, publisher, year, price, dtm, use_yn, authid)
            VALUES('MySQL', 'OReilly', '2009',  58700, '2010-01-01', 1, 2 ) ;
INSERT INTO book (title, publisher, year, price, dtm, use_yn, authid)
            VALUES('JAVA', 'Hall', '2013', 40000, '2014-01-01', 1,  3 ) ;
INSERT INTO book (title, publisher, year, price, dtm, use_yn, authid)
            VALUES('First SQL', 'Wiley', '2015',  57700, '2016-01-01', 1, 4 ) ;

select * from book;


--
DROP TABLE IF EXISTS auth;
CREATE TABLE auth (
      authid    INT  NOT  NULL  auto_increment
    , name      NVARCHAR(50)
    , birth     NVARCHAR(10)

    , PRIMARY KEY(authid)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB  ;


INSERT INTO auth (authid, name, birth)   VALUES(1, 'bob' , '1970.05.01' ) ;
INSERT INTO auth (authid, name, birth)   VALUES(2, 'kim' , '1980.05.01' ) ;
INSERT INTO auth (authid, name, birth)   VALUES(7, 'park', '2000.05.01' ) ;

select * from auth;

  
           
           
--  Phone 테이블
DROP TABLE IF EXISTS phone;
CREATE TABLE IF NOT EXISTS  phone (
      name           NVARCHAR(50)    NOT NULL
    , manufacturer   NVARCHAR(30)    NOT NULL
    , price          INT             NOT NULL 
)
ENGINE=InnoDB 
AUTO_INCREMENT=1 
DEFAULT CHARACTER SET utf8 
COLLATE utf8_unicode_ci;

select * from phone;   






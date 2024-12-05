CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    author_name VARCHAR(255) NOT NULL,
    author_email VARCHAR(255) UNIQUE NOT NULL,
    author_user VARCHAR(255) UNIQUE NOT NULL,
    author_pwd VARCHAR(255) NOT NULL,
    author_level VARCHAR(50),
    author_status BOOLEAN NOT NULL,
    author_create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(255) NOT NULL,
    student_surname VARCHAR(255),
    student_cpf BIGINT UNIQUE NOT NULL,
    student_email VARCHAR(255) UNIQUE NOT NULL,
    student_date_of_born DATE NOT NULL,
    student_phone BIGINT,
    student_cep BIGINT,
    student_logradouro VARCHAR(255),
    student_bairro VARCHAR(255),
    student_city VARCHAR(255),
    student_UF VARCHAR(2),
    student_user VARCHAR(255),
    student_status BOOLEAN NOT NULL,
    student_create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE professionals (
    id SERIAL PRIMARY KEY,
    professional_name VARCHAR(255) NOT NULL,
    professional_surname VARCHAR(255),
    professional_cpf BIGINT UNIQUE NOT NULL,
    professional_email VARCHAR(255) UNIQUE NOT NULL,
    professional_date_of_born DATE NOT NULL,
    professional_phone BIGINT,
    professional_cep BIGINT,
    professional_logradouro VARCHAR(255),
    professional_bairro VARCHAR(255),
    professional_city VARCHAR(255),
    professional_UF VARCHAR(2),
    professional_cargo VARCHAR(255),
    professional_entryTime TIME NOT NULL,
    professional_exitTime TIME NOT NULL,
    professional_user VARCHAR(255),
    professional_status BOOLEAN NOT NULL,
    professional_create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    start TIMESTAMP NOT NULL,
    fim TIMESTAMP NOT NULL,
    organizer VARCHAR(255),
    participants VARCHAR(255),
    descricao TEXT,
    color VARCHAR(7),
    status VARCHAR(20) DEFAULT 'agendado'
);


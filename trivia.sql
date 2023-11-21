DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS question;


CREATE TABLE questions (
    id SERIAL PRIMARY KEY NOT NULL,
    category VARCHAR(1000) NOT NULL,
    type VARCHAR(1000) NOT NULL,
    difficulty VARCHAR(1000) NOT NULL,
    question VARCHAR(1000) NOT NULL,
    correct_answer VARCHAR(1000) NOT NULL,
    incorrect_answer_1 VARCHAR(1000) NOT NULL,
    incorrect_answer_2 VARCHAR(1000) NOT NULL,
    incorrect_answer_3 VARCHAR(1000) NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    score INTEGER
);

INSERT INTO questions (id, category, type, difficulty, question, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3) VALUES
(1, 'General Knowledge', 'multiple', 'easy', 'What is the capital of France?', 'Paris', 'Berlin', 'Madrid', 'Rome'),
(2, 'Science and Nature', 'multiple', 'medium', 'What is the unit of electrical capacitance?', 'Farad', 'Gauss', 'Henry', 'Watt'),
(3, 'History', 'multiple', 'easy', 'In which year did World War I begin?', '1914', '1918', '1925', '1939'),
(4, 'Geography', 'multiple', 'medium', 'Which river is the longest in the world?', 'Nile', 'Amazon', 'Yangtze', 'Mississippi'),
(5, 'Movies', 'multiple', 'hard', 'Who directed the 1994 film Pulp Fiction?', 'Quentin Tarantino', 'Martin Scorsese', 'Steven Spielberg', 'Christopher Nolan'),
(6, 'Sports', 'multiple', 'easy', 'In which sport would you perform a slam dunk?', 'Basketball', 'Football', 'Tennis', 'Golf'),
(7, 'Science and Nature', 'multiple', 'hard', 'What is the chemical symbol for the element gold?', 'Au', 'Ag', 'Cu', 'Fe'),
(8, 'History', 'multiple', 'medium', 'Who was the first woman to win a Nobel Prize?', 'Marie Curie', 'Mother Teresa', 'Rosa Parks', 'Jane Austen'),
(9, 'Geography', 'multiple', 'easy', 'Which continent is known as the Land of the Rising Sun?', 'Asia', 'Europe', 'North America', 'Africa'),
(10, 'Movies', 'multiple', 'medium', 'Which actor played the character Jack Dawson in the movie Titanic?', 'Leonardo DiCaprio', 'Tom Hanks', 'Brad Pitt', 'Johnny Depp'),
(11, 'Sports', 'multiple', 'hard', 'In which year did the first modern Olympic Games take place?', '1896', '1904', '1920', '1936'),
(12, 'General Knowledge', 'multiple', 'easy', 'What is the capital of Australia?', 'Canberra', 'Sydney', 'Melbourne', 'Brisbane'),
(13, 'Science and Nature', 'multiple', 'medium', 'What is the chemical symbol for the element oxygen?', 'O', 'Ox', 'Om', 'Os'),
(14, 'History', 'multiple', 'hard', 'Who was the first emperor of China?', 'Qin Shi Huang', 'Mao Zedong', 'Sun Yat-sen', 'Confucius'),
(15, 'Geography', 'multiple', 'easy', 'Which river runs through the Grand Canyon?', 'Colorado River', 'Amazon River', 'Nile River', 'Mississippi River'),
(16, 'Movies', 'multiple', 'medium', 'Who directed the 1972 film The Godfather?', 'Francis Ford Coppola', 'Alfred Hitchcock', 'Stanley Kubrick', 'Steven Spielberg'),
(17, 'Sports', 'multiple', 'hard', 'In which city were the first modern Olympic Games held?', 'Athens', 'Rome', 'Berlin', 'Paris'),
(18, 'General Knowledge', 'multiple', 'easy', 'What is the largest planet in our solar system?', 'Jupiter', 'Saturn', 'Mars', 'Earth'),
(19, 'Science and Nature', 'multiple', 'medium', 'What is the chemical symbol for the element carbon?', 'C', 'Co', 'Ca', 'Cu'),
(20, 'History', 'multiple', 'hard', 'Who was the first President of the United States?', 'George Washington', 'Thomas Jefferson', 'John Adams', 'James Madison'),
(21, 'Geography', 'multiple', 'easy', 'Which ocean is the largest on Earth?', 'Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'),
(22, 'Movies', 'multiple', 'medium', 'Who directed the film Schindlers List?', 'Steven Spielberg', 'Quentin Tarantino', 'Christopher Nolan', 'Martin Scorsese'),
(23, 'Sports', 'multiple', 'hard', 'How many players are there on a standard soccer team?', '11', '10', '9', '12'),
(24, 'General Knowledge', 'multiple', 'easy', 'What is the currency of Japan?', 'Yen', 'Won', 'Baht', 'Rupee'),
(25, 'Science and Nature', 'multiple', 'medium', 'What is the powerhouse of the cell?', 'Mitochondria', 'Nucleus', 'Endoplasmic Reticulum', 'Golgi Apparatus'),
(26, 'History', 'multiple', 'hard', 'Which war is known as the War to End All Wars?', 'World War I', 'World War II', 'Vietnam War', 'Korean War'),
(27, 'Geography', 'multiple', 'easy', 'Which desert is the largest in the world?', 'Sahara Desert', 'Gobi Desert', 'Arabian Desert', 'Karakum Desert'),
(28, 'Movies', 'multiple', 'medium', 'Who directed the movie The Shawshank Redemption?', 'Frank Darabont', 'Quentin Tarantino', 'Christopher Nolan', 'Martin Scorsese'),
(29, 'Sports', 'multiple', 'hard', 'Which country won the FIFA World Cup in 2018?', 'France', 'Croatia', 'Brazil', 'Germany'),
(30, 'General Knowledge', 'multiple', 'easy', 'What is the largest mammal in the world?', 'Blue Whale', 'Elephant', 'Giraffe', 'Hippopotamus'),
(31, 'Science and Nature', 'multiple', 'medium', 'Which gas makes up the majority of Earths atmosphere?', 'Nitrogen', 'Oxygen', 'Carbon Dioxide', 'Argon'),
(32, 'History', 'multiple', 'hard', 'Who was the first Emperor of Rome?', 'Augustus', 'Julius Caesar', 'Nero', 'Caligula'),
(33, 'Geography', 'multiple', 'easy', 'What is the capital of Canada?', 'Ottawa', 'Toronto', 'Vancouver', 'Montreal'),
(34, 'Movies', 'multiple', 'medium', 'Which actor played the character Neo in The Matrix trilogy?', 'Keanu Reeves', 'Will Smith', 'Tom Cruise', 'Brad Pitt'),
(35, 'Sports', 'multiple', 'hard', 'In which year did the Summer Olympics take place in Rio de Janeiro?', '2016', '2012', '2008', '2004'),
(36, 'General Knowledge', 'multiple', 'easy', 'What is the currency of South Korea?', 'Won', 'Yen', 'Baht', 'Rupee'),
(37, 'Science and Nature', 'multiple', 'medium', 'What is the chemical symbol for the element sulfur?', 'S', 'Su', 'Sr', 'Se'),
(38, 'History', 'multiple', 'hard', 'Who was the first woman to win a Nobel Prize?', 'Marie Curie', 'Mother Teresa', 'Rosa Parks', 'Jane Austen'),
(39, 'Geography', 'multiple', 'easy', 'Which mountain is the highest in the world?', 'Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'),
(40, 'Movies', 'multiple', 'medium', 'Who directed the 1999 film The Sixth Sense?', 'M. Night Shyamalan', 'Christopher Nolan', 'Quentin Tarantino', 'Steven Spielberg'),
(41, 'Sports', 'multiple', 'hard', 'Which country won the gold medal in mens basketball at the 2020 Summer Olympics?', 'USA', 'Spain', 'Australia', 'France'),
(42, 'General Knowledge', 'multiple', 'easy', 'What is the largest planet in our solar system?', 'Jupiter', 'Saturn', 'Mars', 'Earth'),
(43, 'Science and Nature', 'multiple', 'medium', 'What is the chemical symbol for the element fluorine?', 'F', 'Fl', 'Fe', 'Fn'),
(44, 'History', 'multiple', 'hard', 'Who was the first emperor of Japan?', 'Emperor Jimmu', 'Emperor Akihito', 'Emperor Hirohito', 'Emperor Taisho'),
(45, 'Geography', 'multiple', 'easy', 'Which country is known as the Land of the Rising Sun?', 'Japan', 'China', 'Korea', 'Vietnam'),
(46, 'Movies', 'multiple', 'medium', 'Who played the character Tony Stark in the Iron Man film series?', 'Robert Downey Jr.', 'Chris Hemsworth', 'Chris Evans', 'Mark Ruffalo'),
(47, 'Sports', 'multiple', 'hard', 'In which year did the first modern Olympic Winter Games take place?', '1924', '1932', '1948', '1956'),
(48, 'General Knowledge', 'multiple', 'easy', 'What is the currency of Brazil?', 'Real', 'Peso', 'Sol', 'Bolivar'),
(49, 'Science and Nature', 'multiple', 'medium', 'What is the chemical symbol for the element magnesium?', 'Mg', 'Mn', 'Mu', 'Ma'),
(50, 'History', 'multiple', 'hard', 'Who was the first woman to be elected as the Prime Minister of a country?', 'Sirimavo Bandaranaike', 'Indira Gandhi', 'Margaret Thatcher', 'Golda Meir')



-- INSERT INTO users (username, password, name, score) VALUES 
-- ('default1', 'default_password1', 'Default User 1', 2),
-- ('default2', 'default_password2', 'Default User 2', 8),
-- ('default3', 'default_password3', 'Default User 3', 4);
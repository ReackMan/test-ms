import { TestCardValues } from '@/features'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type TestType = (typeof initialState.tests)[0]
// export type TestType = {
//   answers: string[]
//   correctAnswers: number
//   name: string
//   onTime: boolean
//   questionQueue: number
//   questions: Question[]
// }

export type Question = {
  answers: Answer[]
  correctAnswer: string
  isAnswered: boolean
  isDetailed: boolean
  isMultiple: boolean
  question: string
  questionNumber: string
}

export type Answer = {
  title: string
  value: string
}

const initialState = {
  currentRoute: '/',
  tests: [
    {
      answers: [] as string[],
      correctAnswers: 0,
      id: 'test1',
      isOver: false,
      isRunning: false,
      name: 'Тест 1',
      onTime: true,
      questionQueue: 0,
      questions: [
        {
          answers: [
            {
              title: 'в 40-е годы',
              value: '1',
            },
            {
              title: 'в 50-е годы',
              value: '2',
            },
            {
              title: 'в 80-е годы',
              value: '3',
            },
            {
              title: 'в 90-е годы',
              value: '4',
            },
          ],
          correctAnswer: '3',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Массовое производство персональных компьютеров началось...',
          questionNumber: '1',
        },
        {
          answers: [
            {
              title: '1 бод',
              value: '1',
            },
            {
              title: '1 бит',
              value: '2',
            },
            {
              title: '1 байт',
              value: '3',
            },
            {
              title: '1 Кбайт',
              value: '4',
            },
          ],
          correctAnswer: '2',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Наименьшая единица измерения количества информации',
          questionNumber: '2',
        },
        {
          answers: [
            {
              title: '101',
              value: '1',
            },
            {
              title: '110',
              value: '2',
            },
            {
              title: '111',
              value: '3',
            },
            {
              title: '100',
              value: '4',
            },
          ],
          correctAnswer: '1',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Как записывается десятичное число 5 в двоичной системе счисления?',
          questionNumber: '3',
        },
        {
          answers: [
            {
              title: 'размера экрана дисплея',
              value: '1',
            },
            {
              title: 'частоты процессора',
              value: '2',
            },
            {
              title: 'напряжения питания',
              value: '3',
            },
            {
              title: 'быстроты нажатия на клавиши',
              value: '4',
            },
          ],
          correctAnswer: '2',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question:
            'Производительность работы компьютера (быстрота выполнения операций) зависит от...',
          questionNumber: '4',
        },
        {
          answers: [
            {
              title: 'Принтер',
              value: '1',
            },
            {
              title: 'Монитор',
              value: '2',
            },
            {
              title: 'Системный блок',
              value: '3',
            },
            {
              title: 'Модем',
              value: '4',
            },
          ],
          correctAnswer: '2',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Какое устройство может оказывать вредное воздействие на здоровье человека?',
          questionNumber: '5',
        },
        {
          answers: [],
          correctAnswer: 'Программа или данные на диске, имеющие имя',
          isAnswered: false,
          isDetailed: true,
          isMultiple: false,
          question: 'Файл — это...',
          questionNumber: '6',
        },
        {
          answers: [
            {
              title: 'все стороны данного объекта',
              value: '1',
            },
            {
              title: 'некоторые стороны данного объекта',
              value: '2',
            },
            {
              title: 'существенные стороны данного объекта',
              value: '3',
            },
            {
              title: 'несущественные стороны данного объекта',
              value: '4',
            },
          ],
          correctAnswer: '3',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Модель есть замещение изучаемого объекта другим объектом, который отражает...',
          questionNumber: '7',
        },
        {
          answers: [],
          correctAnswer: 'Результативность',
          isAnswered: false,
          isDetailed: true,
          isMultiple: false,
          question: 'Свойством алгоритма является...',
          questionNumber: '8',
        },
        {
          answers: [
            {
              title: 'значение переменной',
              value: '1',
            },
            {
              title: 'имя переменной',
              value: '2',
            },
            {
              title: 'тип переменной',
              value: '3',
            },
            {
              title: 'тип алгоритма',
              value: '4',
            },
          ],
          correctAnswer: '1',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Что изменяет операция присваивания?',
          questionNumber: '9',
        },
        {
          answers: [
            {
              title: 'слово',
              value: '1',
            },
            {
              title: 'точка экрана (пиксель)',
              value: '2',
            },
            {
              title: 'абзац',
              value: '3',
            },
            {
              title: 'знакоместо (символ)',
              value: '4',
            },
          ],
          correctAnswer: '4',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Минимальным объектом, используемым в текстовом редакторе, является...',
          questionNumber: '10',
        },
        {
          answers: [
            {
              title: 'одна',
              value: '1',
            },
            {
              title: 'две (MS-Dos, Windows)',
              value: '2',
            },
            {
              title: 'три (MS-Dos, Windows, Macintosh)',
              value: '3',
            },
            {
              title: 'пять (MS-Dos, Windows, Macintosh, КОИ-8, ISO)',
              value: '4',
            },
          ],
          correctAnswer: '4',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Количество различных кодировок букв русского алфавита составляет...',
          questionNumber: '11',
        },
        {
          answers: [
            {
              title: 'карандаш',
              value: '1',
            },
            {
              title: 'ластик',
              value: '2',
            },
            {
              title: 'линия',
              value: '3',
            },
            {
              title: 'палитры',
              value: '4',
            },
          ],
          correctAnswer: '1,2',
          isAnswered: false,
          isDetailed: false,
          isMultiple: true,
          question: 'Инструментами в графическом редакторе являются...',
          questionNumber: '12',
        },
        {
          answers: [
            {
              title: '10000 бит',
              value: '1',
            },
            {
              title: '10000 байт',
              value: '2',
            },
            {
              title: '10 Кбайт',
              value: '3',
            },
            {
              title: '100 бит',
              value: '4',
            },
          ],
          correctAnswer: '1',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question:
            'Растровый графический файл содержит черно-белое изображение (без градаций серого) размером 100х100 точек. Каков информационный объем этого файла?',
          questionNumber: '13',
        },
        {
          answers: [
            {
              title: 'проекционная панель',
              value: '1',
            },
            {
              title: 'CD-ROM дисковод и звуковая плата',
              value: '2',
            },
            {
              title: 'модем',
              value: '3',
            },
            {
              title: 'плоттер',
              value: '4',
            },
          ],
          correctAnswer: '2',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'В состав мультимедиа-компьютера обязательно входит...',
          questionNumber: '14',
        },
        {
          answers: [],
          correctAnswer: '6',
          isAnswered: false,
          isDetailed: true,
          isMultiple: false,
          question:
            'В электронных таблицах выделена группа ячеек А1:ВЗ. Сколько ячеек входит в эту группу?',
          questionNumber: '15',
        },
      ],
      timeOver: 900,
    },
    {
      answers: [] as string[],
      correctAnswers: 0,
      id: 'test2',
      isOver: false,
      isRunning: false,
      name: 'Тест 2',
      onTime: false,
      questionQueue: 0,
      questions: [
        {
          answers: [
            {
              title: 'в 40-е годы',
              value: '1',
            },
            {
              title: 'в 50-е годы',
              value: '2',
            },
            {
              title: 'в 80-е годы',
              value: '3',
            },
            {
              title: 'в 90-е годы',
              value: '4',
            },
          ],
          correctAnswer: '3',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Массовое производство персональных компьютеров началось...',
          questionNumber: '1',
        },
        {
          answers: [
            {
              title: '1 бод',
              value: '1',
            },
            {
              title: '1 бит',
              value: '2',
            },
            {
              title: '1 байт',
              value: '3',
            },
            {
              title: '1 Кбайт',
              value: '4',
            },
          ],
          correctAnswer: '2',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Наименьшая единица измерения количества информации',
          questionNumber: '2',
        },
        {
          answers: [
            {
              title: '101',
              value: '1',
            },
            {
              title: '110',
              value: '2',
            },
            {
              title: '111',
              value: '3',
            },
            {
              title: '100',
              value: '4',
            },
          ],
          correctAnswer: '1',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Как записывается десятичное число 5 в двоичной системе счисления?',
          questionNumber: '3',
        },
        {
          answers: [
            {
              title: 'размера экрана дисплея',
              value: '1',
            },
            {
              title: 'частоты процессора',
              value: '2',
            },
            {
              title: 'напряжения питания',
              value: '3',
            },
            {
              title: 'быстроты нажатия на клавиши',
              value: '4',
            },
          ],
          correctAnswer: '2',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question:
            'Производительность работы компьютера (быстрота выполнения операций) зависит от...',
          questionNumber: '4',
        },
        {
          answers: [
            {
              title: 'Принтер',
              value: '1',
            },
            {
              title: 'Монитор',
              value: '2',
            },
            {
              title: 'Системный блок',
              value: '3',
            },
            {
              title: 'Модем',
              value: '4',
            },
          ],
          correctAnswer: '2',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Какое устройство может оказывать вредное воздействие на здоровье человека?',
          questionNumber: '5',
        },
        {
          answers: [],
          correctAnswer: 'Программа или данные на диске, имеющие имя',
          isAnswered: false,
          isDetailed: true,
          isMultiple: false,
          question: 'Файл — это...',
          questionNumber: '6',
        },
        {
          answers: [
            {
              title: 'все стороны данного объекта',
              value: '1',
            },
            {
              title: 'некоторые стороны данного объекта',
              value: '2',
            },
            {
              title: 'существенные стороны данного объекта',
              value: '3',
            },
            {
              title: 'несущественные стороны данного объекта',
              value: '4',
            },
          ],
          correctAnswer: '3',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Модель есть замещение изучаемого объекта другим объектом, который отражает...',
          questionNumber: '7',
        },
        {
          answers: [],
          correctAnswer: 'Результативность',
          isAnswered: false,
          isDetailed: true,
          isMultiple: false,
          question: 'Свойством алгоритма является...',
          questionNumber: '8',
        },
        {
          answers: [
            {
              title: 'значение переменной',
              value: '1',
            },
            {
              title: 'имя переменной',
              value: '2',
            },
            {
              title: 'тип переменной',
              value: '3',
            },
            {
              title: 'тип алгоритма',
              value: '4',
            },
          ],
          correctAnswer: '1',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Что изменяет операция присваивания?',
          questionNumber: '9',
        },
        {
          answers: [
            {
              title: 'слово',
              value: '1',
            },
            {
              title: 'точка экрана (пиксель)',
              value: '2',
            },
            {
              title: 'абзац',
              value: '3',
            },
            {
              title: 'знакоместо (символ)',
              value: '4',
            },
          ],
          correctAnswer: '4',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Минимальным объектом, используемым в текстовом редакторе, является...',
          questionNumber: '10',
        },
        {
          answers: [
            {
              title: 'одна',
              value: '1',
            },
            {
              title: 'две (MS-Dos, Windows)',
              value: '2',
            },
            {
              title: 'три (MS-Dos, Windows, Macintosh)',
              value: '3',
            },
            {
              title: 'пять (MS-Dos, Windows, Macintosh, КОИ-8, ISO)',
              value: '4',
            },
          ],
          correctAnswer: '4',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'Количество различных кодировок букв русского алфавита составляет...',
          questionNumber: '11',
        },
        {
          answers: [
            {
              title: 'карандаш',
              value: '1',
            },
            {
              title: 'ластик',
              value: '2',
            },
            {
              title: 'линия',
              value: '3',
            },
            {
              title: 'палитры',
              value: '4',
            },
          ],
          correctAnswer: '1,2',
          isAnswered: false,
          isDetailed: false,
          isMultiple: true,
          question: 'Инструментами в графическом редакторе являются...',
          questionNumber: '12',
        },
        {
          answers: [
            {
              title: '10000 бит',
              value: '1',
            },
            {
              title: '10000 байт',
              value: '2',
            },
            {
              title: '10 Кбайт',
              value: '3',
            },
            {
              title: '100 бит',
              value: '4',
            },
          ],
          correctAnswer: '1',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question:
            'Растровый графический файл содержит черно-белое изображение (без градаций серого) размером 100х100 точек. Каков информационный объем этого файла?',
          questionNumber: '13',
        },
        {
          answers: [
            {
              title: 'проекционная панель',
              value: '1',
            },
            {
              title: 'CD-ROM дисковод и звуковая плата',
              value: '2',
            },
            {
              title: 'модем',
              value: '3',
            },
            {
              title: 'плоттер',
              value: '4',
            },
          ],
          correctAnswer: '2',
          isAnswered: false,
          isDetailed: false,
          isMultiple: false,
          question: 'В состав мультимедиа-компьютера обязательно входит...',
          questionNumber: '14',
        },
        {
          answers: [],
          correctAnswer: '6',
          isAnswered: false,
          isDetailed: true,
          isMultiple: false,
          question:
            'В электронных таблицах выделена группа ячеек А1:ВЗ. Сколько ячеек входит в эту группу?',
          questionNumber: '15',
        },
      ],
      timeOver: 0,
    },
  ],
}

export const testsSlice = createSlice({
  initialState,
  name: 'tests',
  reducers: {
    setAnswer: (state, action: PayloadAction<{ answersData: TestCardValues; id: string }>) => {
      const data = Object.values(action.payload.answersData)
      const test = state.tests.find(t => t.id === action.payload.id)

      if (!test) {
        return
      }
      test.answers.push(data[data.length - 1])
    },
    setCurrentRoute: (state, action: PayloadAction<{ route: string }>) => {
      state.currentRoute = action.payload.route
    },
    setIsAnswered: (state, action: PayloadAction<{ id: string; questionNumber: number }>) => {
      const test = state.tests.find(t => t.id === action.payload.id)

      if (!test) {
        return
      }
      test.questions[action.payload.questionNumber].isAnswered = true
    },
    setQuestionQueue: (state, action: PayloadAction<{ id: string; queue: number }>) => {
      const test = state.tests.find(t => t.id === action.payload.id)

      if (!test) {
        return
      }
      test.questionQueue += 1
    },
    startTimer: (state, action: PayloadAction<{ id: string }>) => {
      const test = state.tests.find(t => t.id === action.payload.id)

      if (!test) {
        return
      }
      test.timeOver -= 1
    },
    testIsOver: (state, action: PayloadAction<{ id: string }>) => {
      const test = state.tests.find(t => t.id === action.payload.id)

      if (!test) {
        return
      }
      test.isOver = true
      test.questions.map((q, i) => {
        q.correctAnswer === test.answers[i] ? (test.correctAnswers += 1) : ''
      })
    },
    timeIsOver: (state, action: PayloadAction<{ id: string }>) => {
      debugger
      testsSlice.caseReducers.testIsOver(state, { payload: { id: action.payload.id }, type: '' })
    },
  },
})

export const testsActions = testsSlice.actions

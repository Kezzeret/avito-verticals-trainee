const ADD_INTERVIEW = 'ADD-INTERVIEW';

const initialState = [
    {
        id: 1,
        preview: 'https://gameland.ru/wp-content/uploads/2019/10/kojima.jpg',
        image: 'https://gameland.ru/wp-content/uploads/2019/10/kojima.jpg',
        title: 'Интервью с Хидэо Кодзима',
        link: 'Читать подробнее',
        text: 'Разговор о разнице культур со знаменитым геймдизайнером',
    },
    {
        id: 2,
        preview: 'https://24tv.ua/resources/photos/news/1200x675_DIR/201906/1164415.jpg?201906120051',
        image: 'https://24tv.ua/resources/photos/news/1200x675_DIR/201906/1164415.jpg?201906120051',
        title: 'Интервью с Киану Ривзом',
        link: 'Читать подробнее',
        text: 'Роль в Cyberpank и ответ фанатам',
    },
    {
        id: 3,
        preview: 'https://b1.gmbox.ru/c/1809.815xp.jpg',
        image: 'https://b1.gmbox.ru/c/1809.815xp.jpg',
        title: 'Интервью с Гейбом Ньюэллом',
        link: 'Читать подробнее',
        text: 'Как мы формируем бюджет? Да никак!',
    },
    {
        id: 4,
        preview: 'https://summonersrift.ru/pictures/lol_news/2017/10/content_dkpyzsaxcaeescj.jpg',
        image: 'https://summonersrift.ru/pictures/lol_news/2017/10/content_dkpyzsaxcaeescj.jpg',
        title: 'Интервью с Грегом Стритом',
        link: 'Читать подробнее',
        text: 'Как морской биолог стал главным дизайнером League of Legends',
    },
];

const interviewDataReducer = (state = initialState, action) => {
    if (action.type === ADD_INTERVIEW) {
        const newInterview = {
            title: action.articleTitle,
            image: action.articleImage,
            preview: action.articlePreview,
            text: action.articleText,
            link: 'ссылки на соцсети',
        };
        state.unshift(newInterview);
    }
    return state;
};

export const addNewAInterviewActionCreator = (title, image, preview, text) => (
    {
        type: ADD_INTERVIEW,
        articleTitle: title,
        articleImage: image,
        articlePreview: preview,
        articleText: text,
    }
);

export default interviewDataReducer;

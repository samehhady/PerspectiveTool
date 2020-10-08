export default class Api
{

    static getQuestions = () =>
    {
        return [
            {
                id: 1,
                title: 'You find it takes effort to introduce yourself to other people.',
                dimension: 'EI',
                direction: 1,
                meaning: 'I'
            },
            {
                id: 2,
                title: 'You consider yourself more practical than creative.',
                dimension: 'SN',
                direction: -1,
                meaning: 'S'
            },
            {
                id: 3,
                title: 'Winning a debate matters less to you than making sure no one gets upset.',
                dimension: 'TF',
                direction: 1,
                meaning: 'F'
            },
            {
                id: 4,
                title: 'You get energized going to social events that involve many interactions.',
                dimension: 'EI',
                direction: -1,
                meaning: 'E'
            },
            {
                id: 5,
                title: 'You often spend time exploring unrealistic and impractical yet intriguing ideas.',
                dimension: 'SN',
                direction: 1,
                meaning: 'N'
            },
            {
                id: 6,
                title: 'Deadlines seem to you to be of relative rather than absolute importance.',
                dimension: 'JP',
                direction: 1,
                meaning: 'P'
            },
            {
                id: 7,
                title: 'Logic is usually more important than heart when it comes to making important decisions.',
                dimension: 'TF',
                direction: -1,
                meaning: 'T'
            },
            {
                id: 8,
                title: 'Your home and work environments are quite tidy.',
                dimension: 'JP',
                direction: -1,
                meaning: 'J'
            },
            {
                id: 9,
                title: 'You do not mind being at the center of attention.',
                dimension: 'EI',
                direction: -1,
                meaning: 'E'
            },
            {
                id: 10,
                title: 'Keeping your options open is more important than having a to-do list.',
                dimension: 'JP',
                direction: 1,
                meaning: 'P'
            }
        ]
    };

    static getPerspectives()
    {
        return [
            {
                title: "EI",
                values: [
                    {
                        title: "Extraversion",
                        shortcut: "E"
                    },
                    {
                        title: "Introversion",
                        shortcut: "I"
                    }
                ]
            },
            {
                title: "SN",
                values: [
                    {
                        title: "Sensing",
                        shortcut: "S"
                    },
                    {
                        title: "Intuition",
                        shortcut: "N"
                    }
                ]
            },
            {
                title: "TF",
                values: [
                    {
                        title: "Thinking",
                        shortcut: "T"
                    },
                    {
                        title: "Feeling",
                        shortcut: "F"
                    }
                ]
            },
            {
                title: "JP",
                values: [
                    {
                        title: "Judging",
                        shortcut: "J"
                    },
                    {
                        title: "Perceiving",
                        shortcut: "P"
                    }
                ]
            }
        ]
    }
}

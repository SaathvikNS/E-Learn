import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Quotes = () => {
    const quote = [
        'A man who asks is a fool for five minutes. A man who never asks is a fool for life. ',
        'He who learns but does not think, is lost! He who thinks but does not learn is in great danger. ',
        'The most useful piece of learning for the uses of life is to unlearn what is untrue. ',
        'The whole purpose of education is to turn mirrors into windows.',
        'Leadership and learning are indispensable to each other. ',
        "The more that you read, the more things you will know. The more that you learn, the more places you'll go. ",
        'If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you. ',
        'If you think education is expensive, try estimating the cost of ignorance. ',
        'Study without desire spoils the memory, and it retains nothing that it takes in. ',
        'I am still learning. ',
        'The ability to speak exactly is intimately related to the ability to know exactly. ',
        'Learning is synthesizing seemingly divergent ideas and data. ',
        "It's what you learn after you know it all that counts. ",
        "You don't learn to walk by following rules. You learn by doing, and by falling over. ",
        "A moment's insight is sometimes worth a life's experience. ",
        'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
        'Curiosity is the wick in the candle of learning.',
        'Education is the ability to listen to almost anything without losing your temper or your self―confidence. ',
        'Change is the end result of all true learning.',
        'The expert in anything was once a beginner. ',
        'Being a student is easy. Learning requires actual work. ',
        'The great aim of education is not knowledge but action. ',
        'Education without application is just entertainment. ',
        'Recipes tell you nothing. Learning techniques is the key. ',
        'It is what we know already that often prevents us from learning. ',
        'I never learned from a man who agreed with me. '
    ]

    const speaker = [
        'Chinese Proverb',
        ' Confucius',
        ' Antisthenes',
        'Sydney J. Harris',
        ' John F. Kennedy',
        ' Dr. Seuss',
        ' Zig Ziglar',
        ' Howard Gardner',
        ' Leonardo da Vinci',
        ' Michelangelo',
        ' Wendell Berry',
        ' Terry Heick',
        ' Harry S Truman',
        ' Richard Branson',
        ' Oliver Wendell Holmes',
        'Malcolm X',
        'William Arthur Ward',
        ' Robert Frost',
        'Leo Buscaglia',
        ' Anonymous',
        ' William Crawford',
        ' Herbert Spencer',
        ' Tim Sanders',
        ' Tom Colicchio',
        ' Claude Bernard',
        ' Robert A. Heinlein'
    ]
        
    const [currentquote, setcurrentquote] = React.useState(quote[0]);
    const [currentspeaker, setcurrentspeaker] = React.useState(speaker[0]);

    const RandomQuote = () => {
        const random = Math.floor(Math.random() * ((quote.length-1) - 0 + 1)) + 0;
        setcurrentquote(quote[random])
        setcurrentspeaker(speaker[random])
    }

    return(
        <ImageBackground source={require("../../../assets/logos/background.png")} resizeMode={"contain"}>
            <TouchableOpacity onPress={RandomQuote} style={styles.container}>
                <Text style={styles.quote}>{currentquote}</Text>
                <Text style={styles.speaker}>{currentspeaker}</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        padding: 20,
    },
    quote:{
        fontFamily: "breeserif",
        color: "#fff",
        fontSize: 25,
    },
    speaker:{
        fontFamily: "breeserif",
        color: "#fff",
        textAlign:"right",
        fontSize: 15,
        marginTop: 20
    },
})

export default Quotes;
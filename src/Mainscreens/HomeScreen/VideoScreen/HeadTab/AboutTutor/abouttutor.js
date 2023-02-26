import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MyContext } from "../../../../../../Global/context";

const AboutTutor = () => {
    const {id, darkscheme} = useContext(MyContext);

    return(
        <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb",}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {id == 1 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Beau Carnes is a curriculum developer and YouTuber who is associated with FreeCodeCamp, a nonprofit organization that offers free coding lessons and certifications online. He is one of the main content creators for FreeCodeCamp and has developed numerous coding tutorials and lessons for the platform.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Beau Carnes is known for his engaging and informative teaching style, which has helped many students learn how to code. Some of his most popular videos on FreeCodeCamp cover topics such as HTML, CSS, JavaScript, and React, among others.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>In addition to his work with FreeCodeCamp, Beau Carnes also creates content on his personal YouTube channel and has authored several books on personal development and self-improvement. He has a background in computer science and has worked as a software engineer in the past.</Text>
                </View> :
                id == 2 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Naveen Reddy is a YouTuber and software engineer who runs the Telusko YouTube channel. He is known for creating educational videos on a variety of topics related to software development, including programming languages, frameworks, and tools.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Naveen's Telusko YouTube channel has over 2 million subscribers and features a wide range of programming tutorials, including videos on Java, Spring Framework, Python, Android, and more. He also creates videos on other technology-related topics, such as cloud computing, DevOps, and machine learning.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Naveen is known for his clear and concise explanations and his ability to break down complex topics into easy-to-understand concepts. His videos are popular among both beginner and experienced programmers, and he has helped many people learn new skills and advance their careers in the technology industry.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>In addition to his work on the Telusko YouTube channel, Naveen is also a software engineer with experience in building enterprise-level applications. He has worked for several large companies, including Infosys, Accenture, and IBM.</Text>
                </View> : 
                id == 3 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Tim is a 3D artist and YouTuber who runs the ChamferZone YouTube channel. He is known for creating videos on a variety of topics related to 3D modeling, texturing, and rendering using software such as Blender, Substance Painter, and Octane Render.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Tim's ChamferZone YouTube channel has over 180,000 subscribers and features a wide range of tutorials and courses on 3D modeling and texturing, as well as reviews of 3D software and hardware. He also creates videos on other topics related to 3D art, such as industry news and trends.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Tim is known for his engaging teaching style and his ability to explain complex 3D concepts in a simple and easy-to-understand manner. His videos are popular among both beginners and experienced 3D artists, and he has helped many people learn new skills and advance their careers in the industry.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>In addition to his work on the ChamferZone YouTube channel, Tim is also a freelance 3D artist who has worked on projects for clients in various industries, including gaming, advertising, and product design.</Text>
                </View> :
                id == 4 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Sandeep is an instructor and YouTuber who is associated with Simplilearn, an online education platform that offers courses and certifications in a variety of fields, including technology, digital marketing, and project management.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Sandeep is one of the main instructors on Simplilearn's YouTube channel, which has over 1.5 million subscribers. He creates videos on a variety of topics related to digital marketing, including search engine optimization (SEO), social media marketing, email marketing, and Google Analytics.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Sandeep is known for his engaging and informative teaching style, and his ability to break down complex concepts into easy-to-understand terms. His videos are popular among both beginners and experienced marketers, and he has helped many people learn new skills and advance their careers in the field of digital marketing.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>In addition to his work on Simplilearn's YouTube channel, Sandeep is also a digital marketing consultant and has worked with numerous clients to help them improve their online presence and reach their marketing goals. He has over 10 years of experience in the field and is recognized as an expert in digital marketing.</Text>
                </View> :
                id == 5 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Mahdi Sharifimehr is a YouTuber who creates videos on a variety of topics related to computer science, programming, and software development. He has over 400,000 subscribers on his YouTube channel and is known for his engaging and informative teaching style.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Mahdi's YouTube videos cover a wide range of topics, including Python programming, machine learning, data science, and web development. He also creates videos on other related topics, such as computer networking, cybersecurity, and blockchain technology.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Mahdi is known for his ability to explain complex concepts in a clear and concise manner, and his videos are popular among both beginners and experienced programmers. He often includes practical examples and exercises in his videos to help viewers apply what they have learned.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>In addition to his work on YouTube, Mahdi is also a computer science instructor and has taught courses on various topics in universities and online learning platforms. He is passionate about technology and has a background in software engineering and computer science research.</Text>
                </View> :
                id == 6 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Dan Scott is a YouTuber and software instructor who creates educational content for the Envato Tuts+ YouTube channel. He is known for creating video tutorials on a variety of topics related to web development, including HTML, CSS, JavaScript, and front-end frameworks like React.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Dan's Envato Tuts+ YouTube channel has over 90,000 subscribers and features a wide range of video tutorials and courses on web development. He is known for his clear and concise explanations and his ability to break down complex topics into easy-to-understand concepts.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>In addition to his work on the Envato Tuts+ YouTube channel, Dan is also a freelance web developer and has worked on projects for clients in various industries. He is passionate about web development and is committed to helping others learn new skills and advance their careers in the field.</Text>
                </View> :
                id == 7 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Rune is a YouTuber who runs the "Learn Python from Rune" YouTube channel. As the name suggests, the channel is dedicated to teaching Python programming to beginners and intermediate learners.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Rune's YouTube channel has over 200,000 subscribers, and he creates videos on a variety of Python-related topics, including basic syntax and programming concepts, web development, data analysis, and machine learning. He is known for his clear and concise explanations and his ability to break down complex topics into easy-to-understand concepts.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>In addition to his work on YouTube, Rune is also a software developer and consultant with several years of experience in the industry. He is passionate about teaching others to code and helping them learn new skills that can advance their careers or personal projects.</Text>
                </View> :
                id == 8 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Edureka is a popular online learning platform that provides a range of courses on various topics related to technology, including software development, data science, cloud computing, and cybersecurity. Edureka's YouTube channel is an extension of their online platform, where they offer free video tutorials and live sessions on different technical subjects.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>On the Edureka YouTube channel, you can find a variety of content, including tutorials, live sessions, interviews, and webinars. They cover a wide range of technical topics such as Java, Python, Big Data, DevOps, Artificial Intelligence, and more. The channel has over 2 million subscribers and has amassed a considerable following due to the quality of their content.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>In addition to the free content, Edureka also offers paid courses on their website, which provide comprehensive training and certifications in various technical fields. Overall, the Edureka YouTube channel is an excellent resource for anyone interested in learning about technology, and their online platform is a great option for those looking to advance their skills and knowledge in a particular technical area.</Text>
                </View> :
                id == 9 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Heath Adams, also known as "The Cyber Mentor," is a popular YouTuber and cybersecurity professional. He is a former US Army veteran and has over a decade of experience in the cybersecurity industry. His YouTube channel, "The Cyber Mentor," has over 260,000 subscribers, and he is well-known for his engaging content and tutorials on cybersecurity.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Heath Adams' YouTube channel focuses on topics related to cybersecurity, including ethical hacking, penetration testing, and network security. He shares his knowledge and expertise through practical demonstrations and tutorials that are easy to follow, even for beginners. His channel also includes reviews of cybersecurity tools and software, and he often provides insights into the latest cybersecurity trends and threats.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Apart from his YouTube channel, Heath Adams also runs a website called TCM Security, where he offers online courses on ethical hacking and cybersecurity. His courses are designed to help students build the skills and knowledge required to become successful cybersecurity professionals.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Overall, Heath Adams is a respected figure in the cybersecurity industry, and his YouTube channel and online courses are great resources for anyone interested in learning more about ethical hacking and cybersecurity.</Text>
                </View> :
                id == 10 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Zach Golwitzer is a popular YouTuber and educator known for his contributions to the FreeCodeCamp YouTube channel. FreeCodeCamp is a non-profit organization that offers free online coding courses and tutorials to help people learn how to code and become web developers.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Zach Golwitzer's videos on the FreeCodeCamp channel focus on a range of topics related to web development, including HTML, CSS, JavaScript, React, and more. He is known for his clear and concise explanations and his ability to break down complex concepts into simple, easy-to-understand terms. His videos are geared towards beginners and those looking to improve their web development skills.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>In addition to his work with FreeCodeCamp, Zach Golwitzer is also a freelance web developer and consultant. He has worked on numerous web development projects, and he brings his real-world experience to his tutorials and videos.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Overall, Zach Golwitzer is a valuable resource for anyone interested in learning web development, and his contributions to the FreeCodeCamp YouTube channel have helped thousands of people learn how to code and become successful web developers.</Text>
                </View> :
                id == 11 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Tommy, also known as "Tommy Programming" is a popular YouTuber and educator known for his contributions to the FreeCodeCamp YouTube channel. FreeCodeCamp is a non-profit organization that offers free online coding courses and tutorials to help people learn how to code and become web developers.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Tommy's videos on the FreeCodeCamp channel focus on a range of topics related to web development, including HTML, CSS, JavaScript, React, and more. He is known for his engaging and energetic teaching style and his ability to break down complex concepts into simple, easy-to-understand terms. His videos are geared towards beginners and those looking to improve their web development skills.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>In addition to his work with FreeCodeCamp, Tommy is also a full-time web developer and consultant. He brings his real-world experience to his tutorials and videos, and he often provides insights and tips on how to approach web development projects.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Overall, Tommy is a valuable resource for anyone interested in learning web development, and his contributions to the FreeCodeCamp YouTube channel have helped thousands of people learn how to code and become successful web developers. His energetic and enthusiastic teaching style makes learning to code fun and engaging.</Text>
                </View> : <Text>Hello World</Text>}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        height: "100%",
    },
    contentPara:{
        marginTop: 15,
        fontSize: 15,
        textAlign: "justify",
        fontFamily: "Inder-Regular",
        color: "#5e5e5e",
    },
})

export default AboutTutor;
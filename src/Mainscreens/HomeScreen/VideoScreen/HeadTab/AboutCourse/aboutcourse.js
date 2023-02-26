import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MyContext } from "../../../../../../Global/context";

const AboutCourse = () => {
    const {id, darkscheme} = useContext(MyContext);

    return(
        <View style={[styles.container, {backgroundColor: darkscheme ? "#181a20" : "#fbfbfb",}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {id == 1 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Python is a high-level, interpreted programming language that is widely used in a variety of applications, such as web development, data analysis, artificial intelligence, scientific computing, and more. It was created in 1994 by Guido van Rossum and has since grown in popularity due to its simplicity, readability, and versatility.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Python's syntax is designed to be easy to read and write, making it an ideal language for beginners to learn. It has a large and active community of users who contribute to its development and share knowledge and resources.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Python's popularity has been driven by its large number of pre-built libraries and frameworks, such as NumPy, Pandas, TensorFlow, and Django, which make it easy to perform complex tasks with minimal code. Additionally, it is cross-platform, meaning that it can run on various operating systems, including Windows, macOS, and Linux.</Text>
                </View> :
                id == 2 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Java is a popular object-oriented programming language that has been widely used for developing desktop, web, and mobile applications. It was created by James Gosling and his team at Sun Microsystems in the mid-1990s and has since become one of the most popular programming languages in the world.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Java's main advantage is its ability to run on any platform that has a Java Virtual Machine (JVM), making it a popular choice for cross-platform applications. It is also known for its simplicity, ease of use, and the vast number of libraries and frameworks that are available to developers.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Java is used in a wide range of applications, from enterprise-level systems to small desktop utilities, and is a key skill for many software developers.</Text>
                </View> : 
                id == 3 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Blender is a free and open-source 3D creation software that is used for creating a wide range of 3D content, such as animations, visual effects, and video games. It was first released in 1998 by Ton Roosendaal, and has since become a popular tool among artists and designers.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Blender's features include modeling tools, animation tools, texturing and shading options, compositing tools, and a game engine. It also has a customizable user interface and can be extended with Python scripting.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Blender has a large and active community of users who contribute to its development and create a wealth of tutorials, add-ons, and resources. It is available on multiple platforms, including Windows, macOS, and Linux.</Text>
                </View> :
                id == 4 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Blockchain is a digital ledger technology that is used to store and share data in a decentralized and secure manner. It was invented in 2008 by an unknown person or group of people under the pseudonym "Satoshi Nakamoto" as a way to support the digital currency, Bitcoin. A blockchain consists of a chain of blocks, where each block contains a set of transactions that have been verified and added to the chain. These blocks are linked together in a way that makes it almost impossible to alter the data stored in them.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Blockchains have a wide range of applications beyond digital currencies, including in supply chain management, voting systems, and digital identity verification. They are considered to be a highly secure and transparent way to store and share data.</Text>
                </View> :
                id == 5 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>React Native is a popular open-source mobile application development framework created by Facebook. It allows developers to build mobile applications for both iOS and Android platforms using a single codebase written in JavaScript.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>React Native uses the same design principles as React, a popular JavaScript library for building web applications. This means that developers can use the same syntax and programming concepts to build mobile applications as they would use for building web applications.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>React Native provides a wide range of pre-built components, as well as the ability to create custom components, which makes it easy to create high-quality and responsive user interfaces for mobile devices. It also supports hot reloading, which allows developers to see changes in their code instantly.</Text>
                </View> :
                id == 6 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Photoshop is a popular image editing software developed by Adobe Systems. It is used by graphic designers, photographers, and artists to manipulate, enhance, and create digital images. Photoshop's features include tools for cropping, resizing, retouching, and adjusting the color and contrast of images. It also has advanced tools for compositing images, creating 3D graphics, and applying various effects and filters.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Photoshop has a customizable interface and can be extended with plugins and scripts. It is widely used in the creative industry and is considered to be the industry standard for image editing software. Additionally, Photoshop has a large and active community of users who  share tutorials, tips, and resources.</Text>
                </View> :
                id == 7 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines statistics, computer science, mathematics, and domain expertise to find patterns and insights in large and complex datasets.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Data science involves various stages, including data collection, cleaning, analysis, visualization, and interpretation. It uses a wide range of tools and techniques, such as machine learning, statistical modeling, data mining, and data visualization.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Data science has numerous applications across industries, including business, healthcare, finance, social sciences, and more. It helps organizations make data-driven decisions, optimize their operations, and gain a competitive edge.</Text>
                </View> :
                id == 8 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Digital marketing is the practice of promoting products or services using digital technologies and channels, such as the internet, social media, mobile devices, and other digital media. It encompasses various strategies, such as search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, email marketing, social media marketing, and more.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Digital marketing allows businesses to reach a wider audience, engage with customers in real-time, and measure the effectiveness of their marketing campaigns. It is a cost-effective way to reach and engage with potential customers, as well as to retain existing ones.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Digital marketing is constantly evolving, and it requires a combination of technical, creative, and analytical skills to create effective and impactful campaigns.</Text>
                </View> :
                id == 9 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Cybersecurity is the practice of protecting internet-connected systems, including hardware, software, and data, from unauthorized access, use, disclosure, disruption, modification, or destruction. It involves implementing various security measures to prevent cyberattacks, data breaches, and other forms of cyber threats.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Cybersecurity encompasses a wide range of practices, such as network security, endpoint security, application security, cloud security, and more. It involves using various tools and techniques, such as firewalls, antivirus software, encryption, and multi-factor authentication, to secure systems and data.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Cybersecurity is essential in today's digital world, where businesses and individuals rely heavily on technology to store and exchange sensitive information. It requires a combination of technical, policy, and awareness-based approaches to ensure the protection of systems and data.</Text>
                </View> :
                id == 10 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Front-end web development is the practice of creating and designing the visual elements of a website, such as the layout, typography, colors, and interactive features that users see and interact with. It involves writing code using various programming languages, such as HTML, CSS, and JavaScript.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Front-end web development focuses on creating user-friendly and responsive interfaces that can be accessed from various devices and platforms. It involves using a wide range of frameworks, libraries, and tools to develop interactive and dynamic websites, such as React, Vue, Angular, and jQuery.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Front-end web development is essential in creating engaging and intuitive web applications that attract and retain users. It requires a combination of technical, creative, and analytical skills to create effective and impactful websites.</Text>
                </View> :
                id == 11 ? <View>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Backend web development is the practice of building and maintaining the server-side of a web application. It involves creating the logic and functionality that runs behind the scenes, such as managing databases, processing user input, and communicating with external services.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Backend web development involves writing code using various programming languages and frameworks, such as PHP, Python, Ruby on Rails, and Nodejs. It also requires knowledge of database management systems, such as MySQL, PostgreSQL, and MongoDB.</Text>
                    <Text style={[styles.contentPara, {color: darkscheme ? "#ffffffcc" : "#5e5e5e", }]}>Backend web development is crucial for creating reliable and secure web applications that can handle large amounts of traffic and data. It requires a combination of technical, analytical, and problem-solving skills to create efficient and scalable back-end systems.</Text>
                </View> : <Text>No Content Found!</Text>}
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
    },
})

export default AboutCourse;
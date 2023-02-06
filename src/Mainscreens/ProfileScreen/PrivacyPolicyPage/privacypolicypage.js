import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

const PrivacyPolicyPage =() => {
    const navigation = useNavigation();

    const backpressed = () => {
        navigation.navigate("ProfileScreen")
    }
    return(
        <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <TouchableOpacity onPress={backpressed}>
                    <Ionicon name="arrow-back" size={25} color={"#82aae3"}/>
                </TouchableOpacity>
                <Text style={[styles.title, {textAlign: "center", width: "95%",}]}>Privacy Policy</Text>
            </View>
            <Text style={{color: "#82aae399", marginTop: 5, paddingLeft: 10}}>Last Updated January 29, 2023</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contentwrapper}>
                    <Text style={styles.content}>
{`This privacy notice for E--Learn ("Company," "we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:

• Download and use our mobile application (E-Learn), or any other application of ours that links to this privacy notice

• Engage with us in other related ways, including any sales, marketing, or events

Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at tester@email.com.
`}
</Text>
<Text style={[styles.content, {fontSize: 20, color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
SUMMARY OF KEY POINTS
</Text>
<Text style={styles.content}>
{`This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for. You can also click here to go directly to our table of contents.

What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with E--Learn and the Services, the choices you make, and the products and features you use. Click here to learn more.

Do we process any sensitive personal information? We do not process sensitive personal information.

Do we receive any information from third parties? We do not receive any information from third parties.

How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Click here to learn more.

In what situations and with which parties do we share personal information? We may share information in specific situations and with specific third parties. Click here to learn more.

How do we keep your information safe? We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Click here to learn more.

What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Click here to learn more.

How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.

Want to learn more about what E--Learn does with any information we collect? Click here to review the notice in full.`}
</Text>
<Text style={[styles.content, {fontSize: 20, color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
TABLE OF CONTENTS
</Text>
<Text style={styles.content}>
{`1. WHAT INFORMATION DO WE COLLECT?

2. HOW DO WE PROCESS YOUR INFORMATION?

3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?

4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?   

5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?

6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?

7. HOW LONG DO WE KEEP YOUR INFORMATION?

8. HOW DO WE KEEP YOUR INFORMATION SAFE?

9. WHAT ARE YOUR PRIVACY RIGHTS?

10. CONTROLS FOR DO-NOT-TRACK FEATURES

11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?

12. DO WE MAKE UPDATES TO THIS NOTICE?

13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?

14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular",}]}>
1. WHAT INFORMATION DO WE COLLECT?
</Text>
<Text style={styles.content}>
{`Personal information you disclose to us

In Short: We collect personal information that you provide to us.

We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.

Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:

• names
• phone numbers
• email addresses
• mailing addresses
• usernames
• passwords

Sensitive Information. We do not process sensitive information.

Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter, or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.

Application Data. If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings.
This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.

All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
2. HOW DO WE PROCESS YOUR INFORMATION?
</Text>
<Text style={styles.content}>
{`In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.

We process your personal information for a variety of reasons, depending on how you interact with our Services, including:

• To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.

• To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.

• To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.

• To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see "WHAT ARE YOUR PRIVACY RIGHTS?" below).`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
</Text>
<Text style={styles.content}>
{`In Short: We may share information in specific situations described in this section and/or with the following third parties.

We may need to share your personal information in the following situations:

• Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
</Text>
<Text style={styles.content}>
{`In Short: We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.

The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions.`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
</Text>
<Text style={styles.content}>
{`In Short: We may use cookies and other tracking technologies to collect and store your information.

We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
</Text>
<Text style={styles.content}>
{`In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.

Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.

We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
7. HOW LONG DO WE KEEP YOUR INFORMATION?
</Text>
<Text style={styles.content}>
{`In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.

We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.

When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
8. HOW DO WE KEEP YOUR INFORMATION SAFE?
</Text>
<Text style={styles.content}>
{`In Short: We aim to protect your personal information through a system of organizational and technical security measures.

We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
9. WHAT ARE YOUR PRIVACY RIGHTS?
</Text>
<Text style={styles.content}>
{`In Short:  You may review, change, or terminate your account at any time.
 
If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.

If you are located in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.

Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.

However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.

Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.`}
</Text>
<Text style={[styles.content, {fontFamily: "FredokaOne-Regular"}]}>
Account Information
</Text>
<Text style={styles.content}>
{`If you would at any time like to review or change the information in your account or terminate your account, you can:
Log in to your account settings and update your user account.
Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.

Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.

If you have questions or comments about your privacy rights, you may email us at tester@email.com.`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
10. CONTROLS FOR DO-NOT-TRACK FEATURES
</Text>
<Text style={styles.content}>
{`Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
</Text>
<Text style={styles.content}>
{`In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.

California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.

If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
12. DO WE MAKE UPDATES TO THIS NOTICE?
</Text>
<Text style={styles.content}>
{`In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.

We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
</Text>
<Text style={styles.content}>
{`If you have questions or comments about this notice, you may email us at tester@email.com or by post to:

E--Learn
tester street
tester main
tester city, tester state 569854
India`}
</Text>
<Text style={[styles.content, {color: "#82aae3", fontFamily: "FredokaOne-Regular"}]}>
14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
</Text>
<Text style={styles.content}>
{`You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by clicking here.
This privacy policy was created using Termly's Privacy Policy Generator.`}
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal: 15,
        marginBottom: 70,
    },
    titlecontainer:{
        paddingHorizontal: 10,
        paddingBottom: 5,
        marginTop: 30,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#82aae388",
        flexDirection: "row",
        alignItems: "center",
    },
    title:{
        fontFamily: 'FredokaOne-Regular',
        color: '#82AAE3',
        fontSize: 30,
    },
    contentwrapper:{
        marginTop: 5,
        paddingHorizontal: 5,
    },
    content:{
        textAlign: "justify",
        marginTop: 15,
        fontSize: 15,
        fontFamily: "Inder-Regular",
        color: "#5e5e5e",
    },
})

export default PrivacyPolicyPage;
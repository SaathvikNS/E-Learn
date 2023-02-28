import React from "react";

const MyContext = React.createContext();

const ContextProvider = ({children}) => {
    const [userid, setuserid] = React.useState();
    const [username, setusername,] = React.useState();
    const [email, setemail] = React.useState();

    const [id, setid] = React.useState();
    const [video, setvideo] = React.useState();
    const [title, settitle] = React.useState();
    const [tutor, settutor] = React.useState();
    const [likes, setlikes] = React.useState();
    const [views, setviews] = React.useState();
    const [about, setabout] = React.useState();
    const [duration, setduration] = React.useState();

    const [wishlist, setwishlist] = React.useState([]);
    const [darkscheme, setdarkscheme] = React.useState(false);

    return(
        <MyContext.Provider value={{userid, setuserid, username, setusername, email, setemail, id, setid, video, setvideo, title, settitle, tutor, settutor, likes, setlikes, views, setviews, about, setabout, wishlist, setwishlist, duration, setduration, darkscheme, setdarkscheme}}>
            {children}
        </MyContext.Provider>
    )
}

export {ContextProvider, MyContext};
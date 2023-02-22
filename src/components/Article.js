function Article({title, date = "January 1, 1970",preview, minutes}){
    // return <span> · ☕️  </span>
    function minutesEmoji(minutes){
        let emoji =""
        if(minutes < 30){
           
           for (let i = 1; i < minutes; i += 5) {
            emoji += "☕️"
            // console.log(emoji);
           }
           
            return <span>   · {emoji+ " " +minutes +" min read"} </span>
        }
        else{
            for (let i = 1; i < minutes; i += 10) {
                emoji += "🍱"
                // console.log(emoji);
               }
               return <span>   · {emoji+ " " +minutes +" min read"} </span>
        }
    }
    return(
        <article>
            <h3>{title}</h3>
            <small >{date}</small>
            {
            minutesEmoji(minutes)
           }
            <p>{preview}</p>
           
        </article>
    )
}
export default Article 
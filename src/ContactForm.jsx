import { useState } from "react"

function ContactForm() {
    const [title, setTitle] = useState("")

    return(
        <form>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <br></br>
            <textarea></textarea>
            <br></br>

            <button>Contact us</button>
        </form>
    )
}

export default ContactForm
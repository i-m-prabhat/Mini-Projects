import React from 'react'
import "./form1.scss"
const Form1 = () =>
{
    return (
        <>

            <form>
                <div id="box">
                    <div id="box1">
                        <span>EVENT REGISTRATION FORM</span>
                    </div>
                    <div id="box2">
                        <div id="box21">
                            <table>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <div className="name">
                                            <input type="text" style={{ width: "100px" }} /> <br /> First name
                                        </div>
                                        <div className="name">
                                            <input type="text" style={{ width: "100px" }} /> <br /> Last Name
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Company</td>
                                    <td>
                                        <input type="text" style={{ width: "235px", margin: "5px" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><input type="email" name="email" value="example@gmail.com"
                                        style={{ width: "235px", margin: "5px", fontSize: "10px" }} /></td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>
                                        <div className="num1">
                                            <input type="number" style={{ width: "50px" }} />
                                            <br /> Area Code
                                        </div>

                                        <div className="num2">
                                            <input type="number" style={{ width: "140px" }} />
                                            <br /> Phone Number
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Subject</td>
                                    <td>
                                        <select style={{ width: "200px" }}>
                                            <option value="choose" selected>
                                                Choose option
                                            </option>
                                            <option value="choose2">Option1</option>
                                            <option value="choose3">Option2</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div id="box22">
                            <span>Are you an exiting Customer?</span> <br />
                            <input type="radio" name="p" /> Yes &nbsp; &nbsp; &nbsp; &nbsp; <input type="radio" name="p" /> No <br /> <br />
                            <input type="Submit" value="REGISTER" id="button" />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form1

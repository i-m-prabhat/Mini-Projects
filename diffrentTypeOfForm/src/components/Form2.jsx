import React from 'react'
import "./form2.scss"
const Form2 = () =>
{
    return (
        <>
            <div style={{ backgroundColor: "rgb(31 78 189 / 78%)", color: "white" }}>
                <fieldset>
                    <legend>Registration Details</legend>
                    <form >
                        <table>
                            <tr>
                                <td class="righttext">University:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td class="righttext">Institute:</td>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <td class="righttext">Branch:</td>
                                <td><select style={{ width: "130px" }}>
                                    <option value="">---select---</option>
                                    <option value=""> Option 1</option>
                                    <option value=""> Option 2</option>
                                </select></td>
                            </tr>
                            <tr>
                                <td class="righttext">Degree:</td>
                                <td><select>
                                    <option value="">---select---</option>
                                    <option value="">Option1</option>
                                    <option value="">Option2</option>
                                    <input type="radio" name="degree" id="" /> Pursuing
                                    <input type="radio" name="degree" />Completed
                                </select></td>
                            </tr>
                            <tr>
                                <td class="righttext">Avarage CPI:</td>
                                <td><input type="number" class="num" /> Upto <input type="number" class="num" /> Th Semester
                                </td>
                            </tr>
                            <tr>
                                <td class="righttext">Experience:</td>
                                <td><input type="number" class="num" /> Years</td>
                            </tr>
                            <tr>
                                <td class="righttext">Your Website Or Blog:</td>
                                <td><input type="text" value={"https://"} /></td>
                            </tr>
                        </table>
                    </form>
                </fieldset>
            </div>
        </>
    )
}

export default Form2

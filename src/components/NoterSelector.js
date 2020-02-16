import React from 'react';

export default class NoterSelector extends React.Component{
    render()
    {
        return (
            <p>
                Noter Selector goes here
                <table class="table borderless">
                    <tbody>
                        <tr>
                            <td>
                                <input 
                                    type="radio" 
                                    onclick="NoterCategory.create(this)" 
                                    id="notetype" 
                                    name="notetype" 
                                    value="Notes" />
                            </td>
                            <td>
                                <input 
                                    type="radio" 
                                    onclick="NoterCategory.create(this)" 
                                    id="notetype" 
                                    name="notetype" 
                                    value="Tools" />
                            </td>
                            <td>
                                <input 
                                    type="radio" 
                                    onclick="NoterCategory.create(this)" 
                                    id="notetype" 
                                    name="notetype" 
                                    value="Emails" />
                            </td>
                        </tr>
                        <tr>
                            <td>Notes</td>
                            <td>Tools</td>
                            <td>Emails</td>
                        </tr>
                    </tbody>    
                </table> 
            </p>
        );
    }
}


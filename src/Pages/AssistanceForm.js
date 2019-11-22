import React from 'react';
import PanicButton from '../Components/PanicButton';

export default function AssistanceForm() {
    return(
        <div className='assistanceformpage'>
            <PanicButton/>
            <div className='secondary-page-title'>
                Assistance Form
            </div>
            <div className='secondary-page-data'>
                <form className='assistance-form' action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST">

                    <input type='hidden' name="orgid" value="00D36000000q6Pd"/>
                    <input type='hidden' name="retURL" value="https://www.arc-southeast.org"/>

                    <label for="name">Contact Name</label><br/>
                    <input id="name" maxlength="80" name="name" size="20" type="text" style={{width: '100%', marginBottom:'10px'}} /><br/>

                    Birthdate<br/>
                    <span class="dateInput dateOnlyInput"><input  id="00N3600000T0uMj" name="00N3600000T0uMj" size="12" type="text" style={{width: '100%', marginBottom:'10px'}} /></span><br/>

                    <label for="phone">Phone</label><br/>
                    <input id="phone" maxlength="40" name="phone" size="20" type="text" style={{width: '100%', marginBottom:'10px'}} /><br/>

                    Best Time to Call<br/>
                    <input id="00N3600000T0uMy" maxlength="255" name="00N3600000T0uMy" size="20" type="text" style={{width: '100%', marginBottom:'10px'}} /><br/>

                    <label for="email">Email</label><br/>
                    <input id="email" maxlength="80" name="email" size="20" type="text" style={{width: '100%', marginBottom:'10px'}} /><br/>

                    Ok to Identify as ARC-SE?<br/>
                    <select id="00N3600000T0uMo" name="00N3600000T0uMo" title="Ok to Identify as ARC-SE?" style={{width: '100%', marginBottom:'10px'}}><option value="">--None--</option><option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select><br/>

                    Name of Clinic Provided on Web Form<br/>
                    <input  id="00N3600000T0uMt" maxlength="255" name="00N3600000T0uMt" size="20" type="text" style={{width: '100%', marginBottom:'10px'}} /><br/>

                    Appointment Date<br/>
                    <span class="dateInput dateOnlyInput"><input id="00N3600000OhhBj" name="00N3600000OhhBj" size="12" type="text" style={{width: '100%', marginBottom:'10px'}} /></span><br/>

                    LMP<br/>
                    <span class="dateInput dateOnlyInput"><input id="00N3600000OhhBo" name="00N3600000OhhBo" size="12" type="text" style={{width: '100%', marginBottom:'10px'}} /></span><br/>

                    <label for="reason">Case Reason</label><br/>
                    <select  id="reason" name="reason" style={{width: '100%', marginBottom:'10px'}} ><option value="">--None--</option><option value="Funding">Funding</option>
                    <option value="Information">Information</option>
                    <option value="Judicial Bypass">Judicial Bypass</option>
                    <option value="Other">Other</option>
                    <option value="Practical Support">Practical Support</option>
                    </select><br/>

                    <label for="description">Description</label><br/>
                    <textarea name="description" style={{width: '100%', marginBottom:'10px'}} ></textarea><br/>

                    <label for="subject">Subject</label><br/>
                    <input  id="subject" maxlength="80" name="subject" size="20" type="text" style={{width: '100%', marginBottom:'10px'}} /><br/>

                    <div style={{display:'flex', justifyContent: 'center'}}>
                        <input type="submit" name="submit" style={{fontFamily: 'Montserrat, sans-serif', fontSize: 'medium'}}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

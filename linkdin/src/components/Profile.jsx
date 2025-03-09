import React from 'react'

const Profile = () => {


    return (
        <div className='flex justify-center '>

            <div className='flex flex-col mt-12  w-96'>
                <h1 className='text-center text-2xl uppercase mb-3'>create your profile</h1>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">What is your name?</legend>
                    <input type="text" className="input w-full" placeholder="Type here " />
                    <p className="fieldset-label">Optional</p>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">What is your name?</legend>
                    <input type="text" className="input w-full" placeholder="Type here " />
                    <p className="fieldset-label">Optional</p>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">What is your name?</legend>
                    <input type="text" className="input w-full" placeholder="Type here " />
                    <p className="fieldset-label">Optional</p>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">What is your name?</legend>
                    <input type="text" className="input w-full" placeholder="Type here " />
                    <p className="fieldset-label">Optional</p>
                </fieldset>


                <button className="btn btn-outline btn-primary">next</button>
            </div>
        </div>
    )
}

export default Profile

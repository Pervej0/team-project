import React from 'react';
import { useForm } from "react-hook-form";
import './ReviewForm.css';

const ReviewForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    };


    return (
        <div className="login-register">
            <div className="login-img">
                <h1>Request For Blood</h1>
            </div>

            <div className="Login-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Name</p>
                    <input {...register("name", { required: true })} placeholder="Name" />
                    {errors.name?.type === 'required' && "Name is required"}

                    <p>Profile</p>
                    <input {...register("profile", { required: true })} placeholder="profile photo url"/>
                    {errors.profile && "profile is required"}

                    <p>Phone</p>
                    <input type="number" {...register("phone", { required: true })} placeholder="Phone" />
                    {errors.phone?.type === 'required' && "Phone is required"}

                    <p>Blood Group</p>
                    <input {...register("bloodGroup", { required: true })} placeholder="bloodGroup" />
                    {errors.bloodGroup?.type === 'required' && "Blood is required"}

                    <p>Bags</p>
                    <input {...register("bags", { required: true })} placeholder="how many blood bags do you need" />
                    {errors.bags?.type === 'required' && "Bags is required"}

                    <p>Reason</p>
                    <input {...register("reason", { required: true })} placeholder="Reason" />
                    {errors.reason?.type === 'required' && "Reason is required"}

                    <p>Hemoglobin</p>
                    <input {...register("hemoglobin", { required: true })} placeholder="hemoglobin" />
                    {errors.hemoglobin?.type === 'required' && "Hemoglobin is required"}

                    <p>Message</p>
                    <input {...register("message", { required: true })} placeholder="message" />
                    {errors.message?.type === 'required' && "Message is required"}

                    <p>Knock Me</p>
                    <input type="time" {...register("knockMe", { required: true })} placeholder="Reason" />
                    {errors.knockMe?.type === 'required' && "Knock me is required"}
                    <br />
                    <br />
                    <br />

                    <input type="submit" />
                </form>
            </div>
            
        </div>
    );
};

export default ReviewForm;
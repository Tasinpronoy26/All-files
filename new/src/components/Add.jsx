import React from 'react';
import Swal from 'sweetalert2'

const Add = () => {



    const handleCoffee = event => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };

        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {

            method: 'POST',
            headers: {

                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data._id) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }



    return (
        <form onSubmit={handleCoffee} className='m-10 p-10 bg-slate-600'>
            <h1 className='text-6xl text-center text-white font-extrabold'>Add a coffee</h1>
            <div className='md:flex'>
                <div className="form-control w-1/2 p-5">
                    <label className="label">
                        <span className="label-text font-extrabold text-white">Coffee Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Coffee Name" name='name' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2 p-5">
                    <label className="label">
                        <span className="label-text font-extrabold text-white">Available Quantity</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered w-full ml-3" />
                    </label>
                </div>
            </div>
            <div className='md:flex'>
                <div className="form-control w-1/2 p-5">
                    <label className="label">
                        <span className="label-text font-extrabold text-white">Supplier Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="supplier" name='supplier' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2 p-5">
                    <label className="label">
                        <span className="label-text font-extrabold text-white">Taste</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="taste" name='taste' className="input input-bordered w-full ml-3" />
                    </label>
                </div>
            </div>
            <div className='md:flex'>
                <div className="form-control w-1/2 p-5">
                    <label className="label">
                        <span className="label-text font-extrabold text-white">Category</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="category" name='category' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2 p-5">
                    <label className="label">
                        <span className="label-text font-extrabold text-white">Details</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="details" name='details' className="input input-bordered w-full ml-3" />
                    </label>
                </div>

            </div>
            <div>
                <div className="form-control w-full p-5">
                    <label className="label">
                        <span className="label-text font-extrabold text-white">Photo</span>
                    </label>
                    <label className="input-group">

                        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered w-full" />
                    </label>

                    <input type='submit' value="ADD COFFEE" name='add' className="btn btn-block mt-10" />
                </div>

            </div>


        </form>
    );
};

export default Add;
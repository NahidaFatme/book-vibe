
const Contact = () => {
    return (
        <div className="mt-12">
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="opacity-4" src="https://i.ibb.co/LnTbbPn/shiromani-kant-Hqbkgga0r-NQ-unsplash.jpg" alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">Contact Us Anytime :D</h2>
                <br />
                <p className="text-xl">123 Book Street</p>
                <p className="text-xl">Literary Lanet</p>
                <p className="text-xl">Novel City, NC 12345</p>
                <p className="text-xl">United States</p>
                <div className="card-actions grow">
                <button className="btn bg-[#23BE0A] grow text-white text-xl ">Click Here to Reach Us</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;
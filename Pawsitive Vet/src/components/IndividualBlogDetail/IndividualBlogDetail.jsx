import doggang from '../../assets/Images/doggang.png'
function IndividualBlogDetail (){
    return(
        <>
         <div className="py-12">
        <div className=" container w-[80%] m-auto">
                <div className='w-[80%] m-auto'>
                    <img src={doggang} alt="doggang" />
                </div>
                <div className='px-12 py-12'>
                    <h2 className='text-4xl font-bold font-custom_font mb-10 text-center'>
                    Client Spotlight: How Buddy Overcame Separation Anxiety With Our Calming Spray
                    </h2>
                <p className='text-2xl text-gray-600'>
                Separation anxiety is a common issue many pet owners face, and it can be heartbreaking to see your furry friend in distress. At our vet shop, we’re dedicated to providing solutions that bring peace and comfort to both pets and their owners. One such success story is that of Buddy, a lovable Golden Retriever who struggled with severe separation anxiety.
                </p>
                <p className='text-2xl text-gray-600 mt-12'>
                Buddy’s owner, Sarah, came to us desperate for help. Every time she left the house, Buddy would become anxious, barking incessantly and causing damage to the home. Sarah had tried various methods, but nothing seemed to work. That’s when we recommended our Calming Spray, specially formulated to soothe anxious pets.
                </p>
                <p className='text-2xl text-gray-600 mt-12'>
                Sarah started using the spray as directed, applying it to Buddy’s bedding and around the house before leaving. Within a few days, she noticed a remarkable change. Buddy was calmer, less destructive, and his barking significantly reduced. Over time, Buddy’s anxiety levels continued to decrease, and he became more comfortable being alone. Sarah was overjoyed and grateful for the transformation our Calming Spray brought to Buddy’s life.
                </p>
                </div>
        </div>
         </div>
        </>
    )
}
export default IndividualBlogDetail;
import birthdaydog from '../../assets/Images/birthdaydog.png';
import brownskinnycat from '../../assets/Images/brownskinnycat.png';
import leopardkindofcat from '../../assets/Images/leopardkindofcat.png';
import twowoman from '../../assets/Images/twowoman.png';
import boneeatingdog from '../../assets/Images/boneeatingdog.png';
import browneyecat from '../../assets/Images/browneyecat.png';
    


function Gallery (){
    return(
        <>
            <div className="py-24">
                <div className="container m-auto">
                    <h2 className='text-center text-5xl font-bold mb-10 font-custom_font'>
                        Pets Gallery
                    </h2>
                    {/* first row gallery  */}
                <div className="flex gap-5 mt-5">
                    <div className='work'>
                        <img src={browneyecat} alt="chubby cat" />
                    </div>
                    <div className='work'>
                        <img src={twowoman} alt="Women" />
                    </div>
                    <div className='work'>
                        <img src={brownskinnycat} alt="skinny cat" />
                    </div>
                </div>
                {/* second row gallery  */}
                <div className="flex gap-5 mt-5">
                    <div className='work'>
                        <img src={leopardkindofcat} alt="chubby cat" />
                    </div>
                    <div className='work'>
                        <img src={boneeatingdog} alt="Women" />
                    </div>
                    <div className='work'>
                        <img src={birthdaydog} alt="skinny cat" />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Gallery;
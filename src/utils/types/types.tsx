// Home

export interface Chooseus {
    readonly _id?:string
    title:string
    description:string
    choose_icon:File | string
    icon_bg:string
}

export interface getChooseus {
    readonly _id?:string
    title:string
    description:string
    choose_icon:string
    icon_bg:string
}


  export interface HomeBanner{
    _id?:string
    image:string,
    link:string
  }

  // export interface HomeBannerContent{
    
  //   banner:HomeBanner[]
  // }


export interface FAQ {
    faq_question:string,
    faq_answer:string

}

export interface HomeFAQ{
    readonly _id?:string
    faq_image:string,
    faqs:FAQ[]
}



export interface Testimonail{
    readonly _id?:string,
    title:string,
    description:string,
    role:string,
    date:string,
    youtube_link:string
}


export interface HomeService{
    readonly  _id?:string
    title:string,
    description:string,
    service_icon?:string,
    slug:string
}


export interface HomeServiceCard{
    readonly  _id?:string
    title:string,
    description:string,
    service_icon:string,
}



export interface HomeCTABannerImage {
    readonly _id?:string
    home_page_banner:string
}

export interface HomeMainBanner{
       readonly _id?:string
        title:string,
        description:string,
        doctors_image:string,
        doctor_name:string,
        doctor_speciality:string,
        happy_patient_count:string
}

export interface OurDoctor{
  _id?: string;
  doctors?:Doctor[]
}

// Doctors


  
export interface Doctor {
    _id?:string
    name: string;
    gender: string;
    doctor_id:string;
    main_speciality: string[];
    speciality:string[];
    department: Department;
    hospital:Hospital;
    email: string;
    phone_number: string;
    doctor_type: string[];
    age: number;
    region: RegionsType;
    experience:number;
    membership:string,
    meta_name: string;
    meta_tag: string[];
    meta_description: string;
    doctor_expert: string[];
    top_treatments: string[];
    bookingType:string,
    doctor_best_known: string[];
    doctor_image: string;
    doctor_cover_image: string;
    doctor_experience: string[];
    registration: string;
    createdAt:string,
    price: number;
    about_doctor: string;
    doctor_video: string[];
    qualification: string[];
  }


  export interface RegionsType {
    _id?: string;
    region_name: string;
    region_image: string;
  };

  
  export interface Department{
    _id?:string
    department_name :string
    department_description:string
  }


  export interface Hospital {
    _id?: string;
    hospital_name: string;
    hospital_address: string;
    hospital_icon: string;
    region:Regions
  }



//   Regions
    
  export interface Regions {
    _id?: string;
    region_image: string;
    region_name: string;
    nearby_region:Regions
    createdAt?: string;
    updatedAt?: string;
  }



  export interface NearbyRegion {
    _id?:string,
    region_image: string;
    region_name: string;
    nearby_region:Regions
}



export interface  LoginUser{
  email_id:string,
  password:string
}




export interface ResetOTpPassword{
  email_id:string,
  otpforgotPassword:string
}


export interface ResetNewPassword{
  password:string,
  token:string
}
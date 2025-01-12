/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeService, LoginUser, OurDoctor, ResetNewPassword, ResetOTpPassword, Testimonail } from "@/utils/types/types";
import { axiosInstance } from "./axios";



const handleError = (error: any, defaultMessage: string): never => {
    const message = error.response?.data?.message || defaultMessage;
    throw new Error(message);
};



// Home Main Banner


export const CreateMainBanner = async (data: FormData) => {
    try {
        const res = await axiosInstance.post(
            "/homebanner/create_homebanner",
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        return res.data;
    } catch (e) {
        handleError(e, "Failed to create 'MainBanner' section");
    }
};

export const updateMainBannerDoctorImage = async (id: string, data: FormData) => {
    try {
        const res = await axiosInstance.put(
            `/homebanner/update_homebannerdoctorimage/${id}`,
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to update 'Main Banner Doctor Image' Field");
    }
};


export const updateMainBanner= async (id: string, data: FormData) => {
    try {
        const res = await axiosInstance.put(
            `/homebanner/update_homebanner/${id}`,
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to update 'MainBanner' section");
    }
};

export const DeleteMainBanner = async (id: string) => {
    try {
        const res = await axiosInstance.delete(
            `/homebanner/delete_homebanner/${id}`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'MainBanner' section");
    }
};


export const getAllMainBanner = async () => {
    try {
        const res = await axiosInstance.get(
            `/homebanner/get_homebanner`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'MainBanner' section");
    }



};





export const CreateChooseus = async (data: FormData) => {
    try {
        const res = await axiosInstance.post(
            "/chooseus/create_chooseus",
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        return res.data;
    } catch (e) {
        handleError(e, "Failed to create 'Choose Us' section");
    }
};

export const updateChooseus = async (id: string, data: FormData) => {
    try {
        const res = await axiosInstance.put(
            `/chooseus/update_chooseus/${id}`,
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to update 'Choose Us' section");
    }
};

export const DeleteChooseus = async (id: string) => {
    try {
        const res = await axiosInstance.delete(
            `/chooseus/delete_chooseus/${id}`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'Choose Us' section");
    }
};


export const getAllChooseus = async () => {
    try {
        const res = await axiosInstance.get(
            `/chooseus/get_chooseus`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'Choose Us' section");
    }
};


// Home Services



export const CreateHomeService = async (data: FormData) => {
    try {
        const res = await axiosInstance.post(
            "/service/create_service",
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        return res.data;
    } catch (e) {
        handleError(e, "Failed to create 'HomeService' section");
    }
};

export const updateHomeService = async (id: string, data: HomeService) => {
    try {
        const res = await axiosInstance.put(
            `/service/update_service/${id}`,
            data
           
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to update 'HomeService' section");
    }
};




export const CreateHomeServiceCard = async (data: FormData) => {
    try {
        const res = await axiosInstance.post(
            "/servicecard/create_servicecard",
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        return res.data;
    } catch (e) {
        handleError(e, "Failed to create 'HomeService' section");
    }
};

export const updateHomeServiceCard = async (id: string, data: FormData) => {
    try {
        const res = await axiosInstance.put(
            `/servicecard/update_servicecard/${id}`,
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
           
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to update 'HomeService' section");
    }
};



export const DeleteHomeServiceCard = async (id: string) => {
    try {
        const res = await axiosInstance.delete(
            `/servicecard/delete_servicecard/${id}`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'HomeService' section");
    }
};


export const getAllHomeServiceCard = async () => {
    try {
        const res = await axiosInstance.get(
            `/servicecard/get_servicecard`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'HomeService' section");
    }
};



export const updateHomeServiceIcon = async (id: string, data: FormData) => {
    try {
        const res = await axiosInstance.put(
            `/service/update_serviceicon/${id}`,
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to update 'HomeService' section");
    }
};


export const DeleteHomeService = async (id: string) => {
    try {
        const res = await axiosInstance.delete(
            `/service/delete_service/${id}`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'HomeService' section");
    }
};


export const getAllHomeService = async () => {
    try {
        const res = await axiosInstance.get(
            `/service/get_service`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'HomeService' section");
    }
};



// Home CTA Banner

export const CreateCTABanner = async (data: FormData) => {
    try {
        const res = await axiosInstance.post(
            "/banner/create_banner",
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        return res.data;
    } catch (e) {
        handleError(e, "Failed to create 'CTA Banner' section");
    }
};


export const updateCTABanner = async (id: string, data: FormData) => {
    try {
        const res = await axiosInstance.put(
            `/banner/update_banner/${id}`,
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to update 'CTA Banner' section");
    }
};


export const DeleteCTABanner = async (id: string) => {
    try {
        const res = await axiosInstance.delete(
            `/banner/delete_banner/${id}`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'CTA Banner' section");
    }
};


export const getCtABanner = async () => {
    try {
        const res = await axiosInstance.get(
            `/banner/get_banner`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'CTA Banner' section");
    }
};


// Home testimonials


export const CreateHometestimonials = async (data: Testimonail) => {
    try {
        const res = await axiosInstance.post(
            "/testinomal/create_testinomal",
           data
        );
        return res.data;
    } catch (e) {
        handleError(e, "Failed to create 'Hometestimonials' section");
    }
};


export const updateHometestimonials = async (id: string, data: Testimonail) => {
    try {
        const res = await axiosInstance.put(
            `/testinomal/update_testinomal/${id}`,
           data,
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to update 'Hometestimonials' section");
    }
};


export const DeleteHometestimonials = async (id: string) => {
    try {
        const res = await axiosInstance.delete(
            `/testinomal/delete_testinomal/${id}`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'Hometestimonials' section");
    }
};


export const getAllHometestimonials = async () => {
    try {
        const res = await axiosInstance.get(
            `/testinomal/get_testinomal`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'Hometestimonials' section");
    }
};




// Home FAQ


export const CreateHomeFAQ = async (data: FormData) => {
    try {
        const res = await axiosInstance.post(
            "/faq/create_faq",
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        return res.data;
    } catch (e) {
        handleError(e, "Failed to create 'HomeFAQ' section");
    }
};


export const updateHomeFAQ = async (id: string, data: FormData) => {
    try {
        const res = await axiosInstance.put(
            `/faq/update_faq/${id}`,
            data,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to update 'HomeFAQ' section");
    }
};


export const DeleteHomeFAQ = async (id: string) => {
    try {
        const res = await axiosInstance.delete(
            `/faq/delete_faq/${id}`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'HomeFAQ ' section");
    }
};


export const getAllHomeFAQ = async () => {
    try {
        const res = await axiosInstance.get(
            `/faq/get_faq`
        );

        return res.data;
    } catch (e) {
        handleError(e, "Failed to delete 'HomeFAQ ' section");
    }



};



export const getAllDoctor = async () => {
    try {
      const res = await axiosInstance.get(`/getalldoctors`);
      console.log(res,"All Doctors")
      return res.data;
    } catch (e) {
      handleError(e, "Failed to fetch  Doctor Detail");
    }
  };

// Choose Doctor 



export const CreateHomeDoctor = async (data:OurDoctor) => {
    try {
      const res = await axiosInstance.post(`/doctorlist/create_doctorlist`,data);
      console.log(res,"All Doctors")
      return res.data;
    } catch (e) {
      handleError(e, "Failed to fetch  Doctor Detail");
    }
  };


  
export const getAllHomeDoctor = async () => {
    try {
      const res = await axiosInstance.get(`/doctorlist/get_doctorlist`);
      console.log(res,"All Doctors")
      return res.data;
    } catch (e) {
      handleError(e, "Failed to fetch  Doctor Detail");
    }
  };
  export const updateHomeDoctor = async (id:string,data:OurDoctor) => {
      try {
        const res = await axiosInstance.put(`/doctorlist/update_doctorlist/${id}`,data);
        console.log(res,"All Doctors")
        return res.data;
      } catch (e) {
        handleError(e, "Failed to fetch  Doctor Detail");
      }
    };
    export const DeleteHomeDoctor = async (id:string) => {
        try {
          const res = await axiosInstance.delete(`/doctorlist/update_doctorlist/${id}`);
          console.log(res,"All Doctors")
          return res.data;
        } catch (e) {
          handleError(e, "Failed to fetch  Doctor Detail");
        }
      };
 



//   Regions


export interface Regiondata{
    region_name:string,
    region_image:string
  }
  
  
  
  export const createRegion =async(data:FormData)=>{
    try {
      const res = await axiosInstance.post(`/region/create_region`,data,
        {headers: { "Content-Type": "multipart/form-data" }}
      );
      console.log(res,"Response")
      return res.data;
      
    } catch (e) {
      handleError(e, "Failed to create Region");
    }
  }
  
  
  
  export const getAllRegion =async()=>{
    try {
      const res = await axiosInstance.get(`/region/get_region`);
      return res.data;
    } catch (e) {
      handleError(e, "Failed to get Regions");
    }
  }
  
  export const DeleteRegion =async(id:string)=>{
    try {
      const res = await axiosInstance.delete(`/region/delete_region/${id}`);
      return res.data;
    } catch (e) {
      handleError(e, "Failed to get Regions");
    }
  }
  
  
  
  
  export const UpdateRegion =async(id:string,data: FormData | Regiondata)=>{
    try {
      const res = await axiosInstance.put(`/region/update_region/${id}`,data,
        {headers: { "Content-Type": "multipart/form-data" }}
  
      );
      console.log(res,"Response")
  
      return res.data;
    } catch (e) {
      handleError(e, "Failed to get Regions");
    }
  }
  

  export const Logout = async () => {
    try {
      const res = await axiosInstance.post(`/admin_logout`, {},
        {withCredentials:true}
      );
  
   
  
      return res.data;
    } catch (e) {
      handleError(e, "Failed to Login");
    }
  };
  
  export const Login = async (data:LoginUser) => {
    try {
      const res = await axiosInstance.post(`/admin/login`,data,
        {withCredentials:true}
      );
  
      console.log(res,"Signed IN")
      return res.data;
    } catch (e) {
      handleError(e, "Failed to Login");
    }
  };
  
  export const SendResetEmail = async ({ email_id }: { email_id: string })  => {
    try {
      const res = await axiosInstance.post(`/admin/forgotpasswordemailverify`, {email_id},
        {withCredentials:true}
      );
  
      console.log(res,"Signed IN")
      return res.data;
    } catch (e) {
      handleError(e, "Failed to Send Email");
    }
  };
  
  
  export const  VerifyOTP = async (data:ResetOTpPassword) => {
    try {
      const res = await axiosInstance.post(`/admin/forgotpasswordotpverify`,data,
        {withCredentials:true}
      );
  
      console.log(res,"Signed IN")
      return res.data;
    } catch (e) {
      handleError(e, "Failed to Verify OTP");
    }
  };
  
  export const ResetPassword = async (data: ResetNewPassword, token: string) => {
    try {
      const res = await axiosInstance.post(
        `/admin/forgotpasswordotpset`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
          withCredentials: true,
        }
      );
  
      console.log(res, "Password Reset Successfully");
      return res.data;
    } catch (e) {
      handleError(e, "Failed to Reset Password");
    }
  };
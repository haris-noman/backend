 export function  successResponse(res, message = 'Success', data = {}) {
    return res.status(200).json({
      success: true,
      message,
      data
    });
  }
  
  export function 	errorResponse(res, status = 500, message = 'Something went wrong') {
    return res.status(status).json({
      success: false,
      message
    });
  }
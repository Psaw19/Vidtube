class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
    this.status = statusCode < 400;
  }
}

export { ApiResponse };

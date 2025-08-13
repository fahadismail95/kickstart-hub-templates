namespace Enterprise.Services {
    public static class ApiService {
        public static object GetData() {
            return new { message = "Enterprise API Data" };
        }
    }
}

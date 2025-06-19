export const moduleRoutes: Record<string, string[]> = {
  CUSTOMER: ["/customer", "/customer/*"],
  DEPARTMENT: ["/department", "/department/*", "/users/*"],
  REPORT_ADMIN: ["/report/admin", "/report/admin/*"],
  REPORT_OPERATIONAL: ["/report/operational", "/report/operational/*"],
  REPORT_FINANCE: ["/report/finance", "/report/finance/*"],
  USER: ["/users", "/users/*"],
};

export const PUBLIC_PATH = [
  "/login",
  "/register",
  "/unauthorized",
  "/error",
  "/forgot-password",
];
export const enum DASHBOARD_MODULES {
  DASHBOARD = "DASHBOARD",
  DASHBOARD_FINANCE = "DASHBOARD_FINANCE",
  DASHBOARD_OPERATIONAL = "DASHBOARD_OPERATIONAL",

  USER = "USER",
  CUSTOMER = "CUSTOMER",
  DEPARTMENT = "DEPARTMENT",

  REPORT = "REPORT",
  REPORT_OPERATIONAL = "REPORT_OPERATIONAL",
  REPORT_FINANCE = "REPORT_FINANCE",
  REPORT_ADMIN = "REPORT_ADMIN",
}

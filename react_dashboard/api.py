import frappe

@frappe.whitelist(allow_guest=True)
def dashboard():
    return frappe.render_template("react_dashboard/templates/pages/dashboard.html", {})

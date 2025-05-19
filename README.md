# CyberX Dashboard UI

A modern and responsive admin dashboard UI designed for monitoring cybersecurity assets, scanning data, and visualizing protection metrics.

![CyberX Dashboard](./img/cyberx_dashboard.png)

## 🧩 Features

- Sidebar with navigation menu
- Local machine and agent metadata display
- Bonus reward section
- File scan activity charts
- Real-time protection status
- Issue breakdown (Simple, Medium, Complex)
- Responsive layout and clean design

## 📁 Project Structure

apps/
└── react_dashboard/
├── public/ # Contains JS/CSS assets (e.g., compiled React)
├── templates/
│ └── dashboard.html # Main HTML page for dashboard view
├── img/
│ └── cyberx_dashboard.png # Screenshot of the dashboard UI
└── README.md # You're here

## 🛠️ Installation

1. Place this folder in your `frappe-bench/apps/` directory:

```bash
cd ~/frappe-bench/apps/
git clone https://github.com/your-username/react_dashboard.git

cd ~/frappe-bench
bench --site your-site-name install-app react_dashboard


bench start

Visit: http://localhost:8000/dashboard
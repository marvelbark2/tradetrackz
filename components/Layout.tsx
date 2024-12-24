import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const currentRoute = router.pathname
  return (
    <div>
      <button className="btn btn-primary sidebar-toggle d-md-none">
        <i className="bi bi-list"></i>
      </button>

      <nav className="sidebar">
        <div className="sidebar-sticky">
          <div className="text-center py-4">
            <h4 className="mb-0">Your Brand</h4>
          </div>

          <div className="sidebar-heading">Main Navigation</div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className={`nav-link${currentRoute === "/" ? " active": ""}`} href="/">
                <i className="bi bi-house-door"></i>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${currentRoute === "/users" ? " active": ""}`} href="/users">
                <i className="bi bi-people"></i>
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${currentRoute === "/products" ? " active": ""}`} href="/products">
                <i className="bi bi-cart"></i>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-graph-up"></i>
                Analytics
              </a>
            </li>
          </ul>

          <div className="sidebar-divider"></div>

          <div className="sidebar-heading">System</div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-gear"></i>
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-shield-check"></i>
                Security
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-bell"></i>
                Notifications
              </a>
            </li>
          </ul>

          <div className="sidebar-divider"></div>

          <div className="px-3">
            <div className="d-flex align-items-center mb-3">
              {/* <img src="/api/placeholder/32/32" alt="Profile" className="rounded-circle me-2"/> */}
              <div>
                <h6 className="mb-0">John Doe</h6>
                <small className="text-muted">Administrator</small>
              </div>
            </div>
            <div className="d-grid">
              <button className="btn btn-outline-danger btn-sm">
                <i className="bi bi-box-arrow-right me-2"></i>Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="content-wrapper">
        {children}
      </div>
    </div>
  )
}
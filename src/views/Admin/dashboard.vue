<template>
  <div class="dashboard-wrapper">
    <Topbar />
    <div class="d-flex flex-nowrap">
      <Sidebar />
      <main class="content bg-light">
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-12 mb-4">
              <div class="card border-0 shadow-sm">
                <div class="card-body p-4">
                  <h1 class="h3 fw-bold mb-3">Welcome to the Dashboard!</h1>
                  <p class="text-muted">Add your dashboard-specific content here.</p>
                </div>
              </div>
            </div>

            <!-- Stats Overview -->
            <div class="col-12 col-md-6 col-xl-3 mb-4">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Visitors</h5>
                    <div class="icon-shape bg-primary text-white rounded-circle shadow-sm">
                      <i class="fas fa-chart-line"></i>
                    </div>
                  </div>
                  <h3 class="fw-bold">2,356</h3>
                  <div class="small text-success">
                    <i class="fas fa-arrow-up"></i> 12.5% since last week
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-xl-3 mb-4">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Users</h5>
                    <div class="icon-shape bg-success text-white rounded-circle shadow-sm">
                      <i class="fas fa-users"></i>
                    </div>
                  </div>
                  <h3 class="fw-bold">1,259</h3>
                  <div class="small text-success">
                    <i class="fas fa-arrow-up"></i> 5.3% since last month
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-xl-3 mb-4">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Couriers</h5>
                    <div class="icon-shape bg-info text-white rounded-circle shadow-sm">
                      <i class="fas fa-truck"></i>
                    </div>
                  </div>
                  <h3 class="fw-bold">46</h3>
                  <div class="small text-danger">
                    <i class="fas fa-arrow-down"></i> 2.4% since yesterday
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-xl-3 mb-4">
              <div class="card border-0 shadow-sm">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Revenue</h5>
                    <div class="icon-shape bg-warning text-white rounded-circle shadow-sm">
                      <i class="fas fa-dollar-sign"></i>
                    </div>
                  </div>
                  <h3 class="fw-bold">$24,895</h3>
                  <div class="small text-success">
                    <i class="fas fa-arrow-up"></i> 8.2% since last month
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="col-12 col-lg-8 mb-4">
              <div class="card border-0 shadow-sm">
                <div class="card-header bg-white border-0 d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">Recent Activity</h5>
                  <div class="dropdown">
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      This Week
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Week</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-borderless table-hover align-middle">
                      <thead class="bg-light">
                        <tr>
                          <th scope="col">Timestamp</th>
                          <th scope="col">User</th>
                          <th scope="col">Action</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Today, 14:23</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <img src="@/assets/img/team/profile-picture-1.jpg" alt="User" class="rounded-circle me-2" width="32" height="32">
                              <span>John Smith</span>
                            </div>
                          </td>
                          <td>Created new account</td>
                          <td><span class="badge bg-success">Completed</span></td>
                        </tr>
                        <tr>
                          <td>Today, 12:45</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <img src="@/assets/img/team/profile-picture-2.jpg" alt="User" class="rounded-circle me-2" width="32" height="32">
                              <span>Sarah Johnson</span>
                            </div>
                          </td>
                          <td>Updated profile</td>
                          <td><span class="badge bg-success">Completed</span></td>
                        </tr>
                        <tr>
                          <td>Yesterday, 16:30</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <img src="@/assets/img/team/profile-picture-3.jpg" alt="User" class="rounded-circle me-2" width="32" height="32">
                              <span>Alex Davis</span>
                            </div>
                          </td>
                          <td>Requested document access</td>
                          <td><span class="badge bg-warning">Pending</span></td>
                        </tr>
                        <tr>
                          <td>Yesterday, 09:15</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <img src="@/assets/img/team/profile-picture-5.jpg" alt="User" class="rounded-circle me-2" width="32" height="32">
                              <span>Maria Garcia</span>
                            </div>
                          </td>
                          <td>Submitted courier application</td>
                          <td><span class="badge bg-primary">In Review</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="col-12 col-lg-4 mb-4">
              <div class="card border-0 shadow-sm">
                <div class="card-header bg-white border-0">
                  <h5 class="mb-0">Performance Overview</h5>
                </div>
                <div class="card-body">
                  <div class="mb-4">
                    <div class="d-flex justify-content-between mb-1">
                      <span>Visitors</span>
                      <span class="text-muted">72%</span>
                    </div>
                    <div class="progress" style="height: 8px;">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 72%;" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="d-flex justify-content-between mb-1">
                      <span>User Retention</span>
                      <span class="text-muted">64%</span>
                    </div>
                    <div class="progress" style="height: 8px;">
                      <div class="progress-bar bg-success" role="progressbar" style="width: 64%;" aria-valuenow="64" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <div class="d-flex justify-content-between mb-1">
                      <span>Courier Availability</span>
                      <span class="text-muted">89%</span>
                    </div>
                    <div class="progress" style="height: 8px;">
                      <div class="progress-bar bg-info" role="progressbar" style="width: 89%;" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div>
                    <div class="d-flex justify-content-between mb-1">
                      <span>System Uptime</span>
                      <span class="text-muted">99.9%</span>
                    </div>
                    <div class="progress" style="height: 8px;">
                      <div class="progress-bar bg-warning" role="progressbar" style="width: 99.9%;" aria-valuenow="99.9" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Topbar from "../../components/Dashboard/Topbar.vue";
import Sidebar from "../../components/Dashboard/Sidebar.vue";

export default {
  name: "AdminDashboard",
  components: {
    Topbar,
    Sidebar,
  },
  mounted() {
    // Add FontAwesome if not already included
    if (!document.getElementById('font-awesome-css')) {
      const link = document.createElement('link');
      link.id = 'font-awesome-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
      document.head.appendChild(link);
    }
  }
};
</script>

<style scoped>
.dashboard-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  margin-left: 250px; /* Width of sidebar */
  transition: margin-left 0.3s;
  min-height: 100vh;
  padding-top: 60px; /* Height of topbar */
}

.icon-shape {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .content {
    margin-left: 0;
    padding: 20px;
    padding-top: 60px;
  }
}

/* Card hover effect */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

/* Progress bar animations */
.progress-bar {
  transition: width 1s ease-in-out;
}
</style>

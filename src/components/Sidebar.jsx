import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

function Sidebar() {
  const navigate = useNavigate();

  return (
    <Sider
      width={220}
      style={{
        background: "#193e06",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          color: "white",
          padding: 20,
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        University
      </div>

      <Menu
        mode="inline"
        theme="dark"
        style={{
          background: "#193e06",
          borderRight: "none",
        }}
        onClick={({ key }) =>
          navigate(key)
        }
        items={[
          {
            key: "/",
            label: "Dashboard",
          },
          {
            key: "/employment",
            label: "ภาวะการมีงานทำ",
          },
          {
            key: "/upload",
            label: "Admin Upload",
          },
          {
            key: "/students",
            label: "ข้อมูลนิสิต",
          },
          {
            key: "/faculty",
            label: "ข้อมูลอาจารย์",
          },
          {
            key: "/summary",
            label: "รายงานสรุป",
          },
        ]}
      />
    </Sider>
  );
}

export default Sidebar;


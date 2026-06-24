import { Layout } from "antd";
import Sidebar from "../components/Sidebar";

const { Header, Content } = Layout;

function EmploymentPage() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout>
        <Header
          style={{
            background: "white",
            display: "flex",
            alignItems: "center",
            paddingLeft: 24,
          }}
        >
          <h2 style={{ margin: 0 }}>
            ภาวะการมีงานทำ
          </h2>
        </Header>

        <Content
          style={{
            padding: 24,
            background: "#f5f5f5",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <h2>
              อัตราการมีงานทำย้อนหลัง 3 ปี
            </h2>

            <p>
              จะเพิ่มกราฟในขั้นตอนถัดไป
            </p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default EmploymentPage;

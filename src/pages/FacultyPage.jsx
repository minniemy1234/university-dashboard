import { Layout, Card, Table } from "antd";
import Sidebar from "../components/Sidebar";

const { Header, Content } = Layout;

function FacultyPage() {
  const dashboardData = JSON.parse(
    localStorage.getItem("dashboardData")
  );

  const teachers =
    dashboardData?.["อาจารย์สาขา"] || [];

  const columns = [
    {
      title: "ชื่ออาจารย์",
      dataIndex: "ชื่ออาจารย์",
    },
    {
      title: "ตำแหน่ง",
      dataIndex: "ตำแหน่งทางวิชาการ",
    },
    {
      title: "คุณวุฒิ",
      dataIndex: "คุณวุฒิ",
    },
    {
      title: "สาขา",
      dataIndex: "สาขา",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout>
        <Header
          style={{
            background: "#fff",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          ข้อมูลอาจารย์
        </Header>

        <Content
          style={{
            padding: 24,
            background: "#f5f5f5",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(3,1fr)",
              gap: 20,
              marginBottom: 20,
            }}
          >
            <Card>
              <h3>อาจารย์ทั้งหมด</h3>
              <h1>
                {teachers.length}
              </h1>
            </Card>

            <Card>
              <h3>อาจารย์ประจำ</h3>
              <h1>
                {teachers.length}
              </h1>
            </Card>

            <Card>
              <h3>ผู้รับผิดชอบหลักสูตร</h3>
              <h1>
                {teachers.length}
              </h1>
            </Card>
          </div>

          <Card title="รายละเอียดอาจารย์">
            <Table
              columns={columns}
              dataSource={teachers}
              rowKey={(record, index) =>
                index
              }
            />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}

export default FacultyPage;

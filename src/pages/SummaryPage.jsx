import { Layout, Card } from "antd";
import Sidebar from "../components/Sidebar";

const { Header, Content } = Layout;

function SummaryPage() {
  const dashboardData = JSON.parse(
    localStorage.getItem("dashboardData")
  );

  const students =
    dashboardData?.["จำนวนนิสิตลงทะเบียน"] || [];

  const teachers =
    dashboardData?.["อาจารย์สาขา"] || [];

  const graduates =
    dashboardData?.["ผู้สำเร็จการศึกษา"] || [];

  const employment =
    dashboardData?.["ภาวะการมีงานทำ"] || [];

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
          รายงานสรุปมหาวิทยาลัย
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
                "repeat(4,1fr)",
              gap: 20,
            }}
          >
            <Card>
              <h3>นิสิตทั้งหมด</h3>
              <h1>{students.length}</h1>
            </Card>

            <Card>
              <h3>อาจารย์ทั้งหมด</h3>
              <h1>{teachers.length}</h1>
            </Card>

            <Card>
              <h3>ผู้สำเร็จการศึกษา</h3>
              <h1>{graduates.length}</h1>
            </Card>

            <Card>
              <h3>ข้อมูลการมีงานทำ</h3>
              <h1>{employment.length}</h1>
            </Card>
          </div>

          <Card
            style={{
              marginTop: 24,
            }}
          >
            <h2>สรุปข้อมูล</h2>

            <ul>
              <li>
                จำนวนนิสิตทั้งหมด
                {" "}
                {students.length}
                {" "}
                คน
              </li>

              <li>
                จำนวนอาจารย์
                {" "}
                {teachers.length}
                {" "}
                คน
              </li>

              <li>
                ผู้สำเร็จการศึกษา
                {" "}
                {graduates.length}
                {" "}
                คน
              </li>

              <li>
                ข้อมูลภาวะการมีงานทำ
                {" "}
                {employment.length}
                {" "}
                รายการ
              </li>
            </ul>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}

export default SummaryPage;

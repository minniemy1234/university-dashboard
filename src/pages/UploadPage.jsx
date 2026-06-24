import Sidebar from "../components/Sidebar";
import { useState } from "react";
import * as XLSX from "xlsx";
import { setDashboardData } from "../data/dashboardData";
import {
  Layout,
  Card,
  Button,
  Modal,
  message,
} from "antd";

const { Header, Content } = Layout;

function UploadPage() {
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] =
  useState(null);
  const [sheetNames, setSheetNames] = useState([]);

  const handleFileChange = (event) => {
   const file = event.target.files[0];

if (!file) return;

setSelectedFile(file);
setFileName(file.name);

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;

      const workbook = XLSX.read(data, {
        type: "binary",
      });

      setSheetNames(workbook.SheetNames);

      const result = {};

      workbook.SheetNames.forEach(
        (sheetName) => {
          const worksheet =
            workbook.Sheets[sheetName];

          result[sheetName] =
            XLSX.utils.sheet_to_json(
              worksheet,
              {
                defval: "",
              }
            );
        }
      );

      setDashboardData(result);

      localStorage.setItem(
        "dashboardData",
        JSON.stringify(result)
      );

      alert("อัปโหลดข้อมูลสำเร็จ");
    };

    reader.readAsBinaryString(file);
  };

  const handleUpload = () => {
  if (!selectedFile) {
    message.warning(
      "กรุณาเลือกไฟล์ก่อน"
    );
    return;
  }

  Modal.confirm({
    title: "ยืนยันการอัปโหลด",
    content:
      "ต้องการนำเข้าข้อมูลจากไฟล์นี้ใช่หรือไม่",
    okText: "ยืนยัน",
    cancelText: "ยกเลิก",

    onOk() {
      const reader =
        new FileReader();

      reader.onload = (e) => {
        const data =
          e.target.result;

        const workbook =
          XLSX.read(data, {
            type: "binary",
          });

        const result = {};

        workbook.SheetNames.forEach(
          (sheetName) => {
            const worksheet =
              workbook.Sheets[
                sheetName
              ];

            result[sheetName] =
              XLSX.utils.sheet_to_json(
                worksheet,
                {
                  defval: "",
                }
              );
          }
        );

        setDashboardData(result);

        localStorage.setItem(
          "dashboardData",
          JSON.stringify(result)
        );

        message.success(
          "อัปโหลดข้อมูลสำเร็จ"
        );
      };

      reader.readAsBinaryString(
        selectedFile
      );
    },
  });
};
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <Layout>
        <Header
          style={{
            background: "#fff",
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
              }}
            >
              Upload Data
            </h2>

            <div
              style={{
                color: "#888",
                fontSize: 13,
              }}
            >
              นำเข้าข้อมูลจาก Excel
            </div>
          </div>
        </Header>

        <Content
          style={{
            padding: 24,
            background: "#f5f5f5",
          }}
        >
          <Card
            style={{
              borderRadius: 20,
            }}
          >
            <h2>
              อัปโหลดไฟล์ Excel
            </h2>

            <p>
              รองรับไฟล์
              .xlsx, .xls และ .csv
            </p>

            <input
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={
                handleFileChange
              }
            />
            <div
  style={{
    marginTop: 20,
  }}
>
  <Button
    type="primary"
    size="large"
    onClick={handleUpload}
  >
    อัปโหลดข้อมูล
  </Button>
</div>

            {fileName && (
              <>
                <hr
                  style={{
                    margin:
                      "20px 0",
                  }}
                />

                <h3>
                  ไฟล์ที่เลือก
                </h3>

                <p>
                  {fileName}
                </p>

                <h3>
                  Sheet ที่พบ
                </h3>

                <ul>
                  {sheetNames.map(
                    (sheet) => (
                      <li
                        key={sheet}
                      >
                        {sheet}
                      </li>
                    )
                  )}
                </ul>
              </>
            )}
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
}

export default UploadPage;

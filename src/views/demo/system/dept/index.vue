<!--  2021-09-01
  vite 模式下组件注册测试
  使用 VXETable 表格组件
-->
<template>
  <div>
    <p>----使用 VXETable 表格组件--</p>
    <vxe-table ref="xTable" border height="600" :data="tableData">
      <vxe-column field="name" title="Name" />
      <vxe-column field="age" title="Age" />
      <vxe-column
        field="date"
        title="Date"
        :filters="[{ data: [] }]"
        :filter-render="{ name: 'AInput' }"
      />
    </vxe-table>
    <!-- 
    <vxe-table
      ref="xTable"
      border
      stripe
      resizable
      size="mini"
      align="center"
      :loading="loading"
      :height="tableheight"
      :data="tableData.data"
    >
      <vxe-table-column type="seq" title="序号" fixed="left" width="45px" />
      <vxe-table-column field="USERNAME" title="工号" fixed="left" width="75px" />
      <vxe-table-column field="USERNAME" title="姓名" fixed="left" width="65px" />
      <vxe-table-column field="ADDRESS" title="内容" fixed="left" />
    </vxe-table>
    <vxe-pager
      border
      :loading="loading"
      :current-page="tableData.pageIndex"
      :page-size="tableData.pageSize"
      :total="tableData.totalCount"
      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
      @page-change="handlePageChange"
    /> -->
  </div>
</template>

<script lang="ts">
  // import { VXETable } from 'vxe-table';
  // import VXETablePluginAntd from 'vxe-table-plugin-antd';
  // import 'vxe-table-plugin-antd/dist/style.css';
  // VXETable.use(VXETablePluginAntd);
  export default {
    // components: { VXETable },
    setup() {
      return {
        tableData: [
          { id: 100, name: 'test0', age: 28, date: null },
          { id: 101, name: 'test1', age: 32, date: null },
          { id: 102, name: 'test2', age: 36, date: null },
        ],
      };
    },
  };
</script>

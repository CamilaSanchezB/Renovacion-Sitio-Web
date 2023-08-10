import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import modelPath from '../models/MDQubeSAT.gltf'

export default function Model(props) {
  const { nodes, materials } = useGLTF(modelPath)
  return (
    <group {...props} dispose={null}>
      <group scale={0.006}>
        <group position={[27.875, 7.9483, -67.62]} rotation={[-0.081, -0.309, 1.31]}>
          <group position={[29.517, -36.409, 58.052]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['2P_Structure_front_1'].geometry} material={nodes['2P_Structure_front_1'].material} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['2P_Structure_front_2'].geometry} material={nodes['2P_Structure_front_2'].material} />
          </group>
          <group position={[46.655, -12.314, 42.293]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
            <group position={[-34.259, 12.882, -28.905]} rotation={[-Math.PI, 0, Math.PI / 2]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.D2F_L3_A_BASE_1.geometry} material={nodes.D2F_L3_A_BASE_1.material} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.D2F_L3_A_ACTUATOR_1.geometry} material={nodes.D2F_L3_A_ACTUATOR_1.material} position={[-8.25, 5.01, 0.325]} rotation={[0, 0, -0.495]} />
            </group>
            <group position={[2.741, 12.882, -28.905]} rotation={[0, 0, -Math.PI / 2]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.D2F_L3_A1_BASE_1.geometry} material={nodes.D2F_L3_A1_BASE_1.material} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.D2F_L3_A1_ACTUATOR_1.geometry} material={nodes.D2F_L3_A1_ACTUATOR_1.material} position={[-8.25, 5.01, -0.049]} rotation={[0, 0, -0.495]} />
            </group>
            <group position={[-3.159, -57.368, -27.505]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.D2F_L_BASE_1.geometry} material={nodes.D2F_L_BASE_1.material} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.D2F_L_ACTUATOR_1.geometry} material={nodes.D2F_L_ACTUATOR_1.material} position={[-8.797, 5.01, -0.001]} rotation={[0, 0, -0.019]} />
            </group>
            <group position={[-29.759, -56.638, -26.93]} rotation={[-Math.PI / 2, 0, 2.681]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.res_th_025W_6.geometry} material={nodes.res_th_025W_6.material} position={[-0.349, 0.807, 0]} />
            </group>
            <group position={[-26.759, -17.138, -26.93]} rotation={[-Math.PI / 2, 0, 0.603]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.res_th_025W_7.geometry} material={nodes.res_th_025W_7.material} position={[-0.536, -0.697, 0]} />
            </group>
            <group position={[-26.759, 24.062, -26.93]} rotation={[-Math.PI / 2, 0, 2.045]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.res_th_025W_8.geometry} material={nodes.res_th_025W_8.material} position={[-0.76, 0.442, 0]} />
            </group>
            <group position={[-26.759, -56.638, -26.93]} rotation={[-Math.PI / 2, 0, 2.681]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.res_th_025W_9.geometry} material={nodes.res_th_025W_9.material} position={[-0.349, 0.807, 0]} />
            </group>
            <group position={[-23.759, -17.138, -26.93]} rotation={[-Math.PI / 2, 0, 2.071]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.res_th_025W_10.geometry} material={nodes.res_th_025W_10.material} position={[-0.748, 0.462, 0]} />
            </group>
            <group position={[-23.759, 24.062, -26.93]} rotation={[-Math.PI / 2, 0, 2.317]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.res_th_025W_11.geometry} material={nodes.res_th_025W_11.material} position={[-0.613, 0.63, 0]} />
            </group>
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.PCB_Base_v3_1.geometry} material={nodes.PCB_Base_v3_1.material} position={[-15.759, -17.138, -26.005]} />
          </group>
          <group position={[-6.743, 3.091, 33.22]} rotation={[Math.PI / 2, 0, 1.571]}>
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.PCB_Lateral_panels_v2_1.geometry} material={nodes.PCB_Lateral_panels_v2_1.material} position={[-0.181, -36.259, 15.3]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Sustrate_2.geometry} material={nodes.Sustrate_2.material} position={[-0.181, -36.185, 12.025]} rotation={[0, -1.57, 0]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Cobre_2.geometry} material={nodes.Cobre_2.material} position={[1.319, -36.26, 15.3]} rotation={[Math.PI / 2, 1.57, 0]} />
          </group>
          <group position={[57.946, -18.049, 54.215]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.PCB_Lateral_panels_v2_B_1.geometry} material={nodes.PCB_Lateral_panels_v2_B_1.material} position={[-27.336, -28.429, -5.84]} rotation={[0, 0, -Math.PI]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Sustrate_3.geometry} material={nodes.Sustrate_3.material} position={[-28.836, -28.354, -9.115]} rotation={[0, -Math.PI / 2, 0]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Cobre_3.geometry} material={nodes.Cobre_3.material} position={[-27.336, -28.429, -5.84]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
          </group>
          <group position={[-71.814, -146.678, 67.134]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
            <group position={[-21.49, -21.964, -55.799]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Convex_TH_mid_v2_1.geometry} material={nodes.Convex_TH_mid_v2_1.material} position={[-166.294, 54.47, 7.173]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Tape_spring_v2_2.geometry} material={nodes.Tape_spring_v2_2.material} position={[-80.295, 34.964, -40.927]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Cocave_TH_v2_6.geometry} material={nodes.Cocave_TH_v2_6.material} position={[-80.295, 34.964, 102.073]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Tape_spring_v2_3.geometry} material={nodes.Tape_spring_v2_3.material} position={[-166.294, 34.964, -40.927]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Cocave_TH_v2_7.geometry} material={nodes.Cocave_TH_v2_7.material} position={[-166.294, 34.964, 102.073]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Cocave_TH_v2_8.geometry} material={nodes.Cocave_TH_v2_8.material} position={[-166.294, 34.964, -40.927]} rotation={[-Math.PI, 0, Math.PI]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Cocave_TH_v2_9.geometry} material={nodes.Cocave_TH_v2_9.material} position={[-80.295, 34.964, -40.927]} rotation={[Math.PI, 0, Math.PI]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Cocave_TH_v2_10.geometry} material={nodes.Cocave_TH_v2_10.material} position={[-166.294, 34.964, 52.573]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Cocave_TH_v2_11.geometry} material={nodes.Cocave_TH_v2_11.material} position={[-80.295, 34.964, 52.573]} />
            </group>
            <group position={[71.41, 172.151, -106.182]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Deployable_panels_2.geometry} material={nodes.Deployable_panels_2.material} position={[-12.827, 0, 70.821]} rotation={[-Math.PI / 2, 0, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Sustrate_7.geometry} material={nodes.Sustrate_7.material} position={[-9.552, 1.6, 70.896]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Sustrate_70_mm_2.geometry} material={nodes.Sustrate_70_mm_2.material} position={[-9.552, -0.35, 70.821]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
            </group>
            <group position={[21.867, 70.356, -61.029]} rotation={[-Math.PI, 0, Math.PI]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Sustrate_8.geometry} material={nodes.Sustrate_8.material} position={[9.509, 31.05, 43.169]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Deployable_panel_mid_1.geometry} material={nodes.Deployable_panel_mid_1.material} position={[12.784, 30.975, 43.539]} />
            </group>
            <group position={[-42.535, 43.879, -106.182]} rotation={[-Math.PI / 2, 0, Math.PI]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Deployable_panels_3.geometry} material={nodes.Deployable_panels_3.material} position={[-2.118, 0, 57.451]} rotation={[-Math.PI / 2, 0, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Sustrate_9.geometry} material={nodes.Sustrate_9.material} position={[1.157, 1.6, 57.526]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Sustrate_70_mm_3.geometry} material={nodes.Sustrate_70_mm_3.material} position={[1.157, -0.35, 57.451]} rotation={[-Math.PI / 2, 0, -Math.PI]} />
            </group>
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Soporte_para_tanza_v2_2.geometry} material={nodes.Soporte_para_tanza_v2_2.material} position={[-37.142, 101.331, -108.763]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Soporte_para_tanza_v2_3.geometry} material={nodes.Soporte_para_tanza_v2_3.material} position={[55.308, 101.331, -108.763]} rotation={[0, 0, -Math.PI]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-6-8_8_10'].geometry} material={nodes['din_912-m1_6x0_35-6-8_8_10'].material} position={[46.083, 58.331, -104.582]} rotation={[0, 0, -1.469]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-6-8_8_11'].geometry} material={nodes['din_912-m1_6x0_35-6-8_8_11'].material} position={[71.083, 58.331, -104.582]} rotation={[0, 0, -2.408]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-6-8_8_12'].geometry} material={nodes['din_912-m1_6x0_35-6-8_8_12'].material} position={[46.083, 144.331, -104.582]} rotation={[0, 0, 1.019]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-6-8_8_13'].geometry} material={nodes['din_912-m1_6x0_35-6-8_8_13'].material} position={[71.083, 144.331, -104.582]} rotation={[0, 0, -0.958]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-6-8_8_14'].geometry} material={nodes['din_912-m1_6x0_35-6-8_8_14'].material} position={[-52.917, 144.331, -104.582]} rotation={[0, 0, 1.99]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-6-8_8_15'].geometry} material={nodes['din_912-m1_6x0_35-6-8_8_15'].material} position={[-27.917, 58.331, -104.582]} rotation={[0, 0, 0.286]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-6-8_8_16'].geometry} material={nodes['din_912-m1_6x0_35-6-8_8_16'].material} position={[-27.917, 144.331, -104.582]} rotation={[0, 0, 1.506]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-6-8_8_17'].geometry} material={nodes['din_912-m1_6x0_35-6-8_8_17'].material} position={[-52.917, 58.331, -104.582]} rotation={[0, 0, -1.637]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_14'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_14'].material} position={[46.083, 144.331, -108.763]} rotation={[Math.PI / 2, -1.03, -Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_15'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_15'].material} position={[46.083, 58.331, -108.763]} rotation={[Math.PI / 2, -0.132, -Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_16'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_16'].material} position={[71.083, 144.331, -108.763]} rotation={[Math.PI / 2, 0.885, -Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_17'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_17'].material} position={[71.083, 58.331, -108.763]} rotation={[Math.PI / 2, 0.718, -Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_18'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_18'].material} position={[-27.917, 58.331, -108.763]} rotation={[-Math.PI / 2, 0.5, Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_19'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_19'].material} position={[-52.917, 144.331, -108.763]} rotation={[Math.PI / 2, 0.569, -Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_20'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_20'].material} position={[-52.917, 58.331, -108.763]} rotation={[Math.PI / 2, 0.928, -Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_21'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_21'].material} position={[-27.917, 144.331, -108.763]} rotation={[-Math.PI / 2, 0.606, Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-8-8_8_4'].geometry} material={nodes['din_912-m1_6x0_35-8-8_8_4'].material} position={[21.583, 144.331, -104.569]} rotation={[0, 0, -2.711]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-8-8_8_5'].geometry} material={nodes['din_912-m1_6x0_35-8-8_8_5'].material} position={[-3.417, 144.331, -104.569]} rotation={[0, 0, 3.098]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-8-8_8_6'].geometry} material={nodes['din_912-m1_6x0_35-8-8_8_6'].material} position={[21.583, 58.331, -104.569]} rotation={[0, 0, -2.097]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-8-8_8_7'].geometry} material={nodes['din_912-m1_6x0_35-8-8_8_7'].material} position={[-3.417, 58.331, -104.569]} rotation={[0, 0, 2.713]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_22'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_22'].material} position={[21.583, 144.331, -110.269]} rotation={[-Math.PI / 2, 0.092, Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_23'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_23'].material} position={[-3.417, 144.331, -110.269]} rotation={[Math.PI / 2, -1.307, -Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_24'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_24'].material} position={[21.583, 58.331, -110.269]} rotation={[-Math.PI / 2, -0.959, Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_25'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_25'].material} position={[-3.417, 58.331, -110.269]} rotation={[Math.PI / 2, -0.691, -Math.PI / 2]} />
          </group>
          <group position={[-35.193, -34.938, 25.18]} rotation={[Math.PI, Math.PI / 2, 0]}>
            <group position={[32.871, -2.329, 4.91]}>
              <group position={[8.275, -4.7, 0]} rotation={[Math.PI, -Math.PI / 2, 0]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-4400000_2'].geometry} material={nodes['G125-4400000_2'].material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-4400000_3'].geometry} material={nodes['G125-4400000_3'].material} />
              </group>
              <group position={[-8.275, -4.7, 0]} rotation={[Math.PI, -Math.PI / 2, 0]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-4400000_4'].geometry} material={nodes['G125-4400000_4'].material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-4400000_5'].geometry} material={nodes['G125-4400000_5'].material} />
              </group>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-3271696_1'].geometry} material={nodes['G125-3271696_1'].material} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-3271696_2'].geometry} material={nodes['G125-3271696_2'].material} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1060005_BENT_8'].geometry} material={nodes['G125-1060005_BENT_8'].material} position={[4.375, 0, -0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1060005_BENT_9'].geometry} material={nodes['G125-1060005_BENT_9'].material} position={[3.125, 0, -0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1060005_BENT_10'].geometry} material={nodes['G125-1060005_BENT_10'].material} position={[1.875, 0, -0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1060005_BENT_11'].geometry} material={nodes['G125-1060005_BENT_11'].material} position={[0.625, 0, -0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1060005_BENT_12'].geometry} material={nodes['G125-1060005_BENT_12'].material} position={[-0.625, 0, -0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1060005_BENT_13'].geometry} material={nodes['G125-1060005_BENT_13'].material} position={[-1.875, 0, -0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1060005_BENT_14'].geometry} material={nodes['G125-1060005_BENT_14'].material} position={[-3.125, 0, -0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1060005_BENT_15'].geometry} material={nodes['G125-1060005_BENT_15'].material} position={[-4.375, 0, -0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1070005_BENT_8'].geometry} material={nodes['G125-1070005_BENT_8'].material} position={[4.375, 0, 0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1070005_BENT_9'].geometry} material={nodes['G125-1070005_BENT_9'].material} position={[3.125, 0, 0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1070005_BENT_10'].geometry} material={nodes['G125-1070005_BENT_10'].material} position={[1.875, 0, 0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1070005_BENT_11'].geometry} material={nodes['G125-1070005_BENT_11'].material} position={[0.625, 0, 0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1070005_BENT_12'].geometry} material={nodes['G125-1070005_BENT_12'].material} position={[-0.625, 0, 0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1070005_BENT_13'].geometry} material={nodes['G125-1070005_BENT_13'].material} position={[-1.875, 0, 0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1070005_BENT_14'].geometry} material={nodes['G125-1070005_BENT_14'].material} position={[-3.125, 0, 0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-1070005_BENT_15'].geometry} material={nodes['G125-1070005_BENT_15'].material} position={[-4.375, 0, 0.625]} rotation={[0, -Math.PI / 2, 0]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-442A000_2'].geometry} material={nodes['G125-442A000_2'].material} position={[8.275, -1.8, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-442A000_3'].geometry} material={nodes['G125-442A000_3'].material} position={[-8.275, -1.8, 0]} />
            </group>
            <group position={[32.871, -2.229, 4.91]} rotation={[0, 0, Math.PI]}>
              <group position={[8.275, -5.2, 0]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-4620000_2'].geometry} material={nodes['G125-4620000_2'].material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-4620000_3'].geometry} material={nodes['G125-4620000_3'].material} />
              </group>
              <group position={[-8.275, -5.2, 0]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-4620000_4'].geometry} material={nodes['G125-4620000_4'].material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-4620000_5'].geometry} material={nodes['G125-4620000_5'].material} />
              </group>
              <group position={[0, -2.917, -1.55]} rotation={[Math.PI / 2, 0, Math.PI]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.G125_LASER_HWN_1.geometry} material={nodes.G125_LASER_HWN_1.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.G125_LASER_HWN_2.geometry} material={nodes.G125_LASER_HWN_2.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.G125_LASER_HWN_3.geometry} material={nodes.G125_LASER_HWN_3.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.G125_LASER_HWN_4.geometry} material={nodes.G125_LASER_HWN_4.material} />
              </group>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes['G125-2241696_1'].geometry} material={nodes['G125-2241696_1'].material} rotation={[-Math.PI, 0, 0]} />
            </group>
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.PCB_GPS_Antenna_v2_1.geometry} material={nodes.PCB_GPS_Antenna_v2_1.material} position={[32.871, -22.929, 7.71]} rotation={[-Math.PI / 2, 0, Math.PI]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.PATCH_1.geometry} material={nodes.PATCH_1.material} position={[32.871, -30.029, 10.71]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Patch_2_1.geometry} material={nodes.Patch_2_1.material} position={[32.871, -30.029, 4.91]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
          </group>
          <group position={[97.432, -34.657, 75.448]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['125-0701-201_2'].geometry} material={nodes['125-0701-201_2'].material} position={[-17.396, -13.975, 17.788]} rotation={[0, 0, Math.PI / 2]} />
            <group position={[-73.247, 5.873, 8.755]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Antenna_1.geometry} material={nodes.Antenna_1.material} position={[55.851, 1.28, 20.693]} rotation={[0, 0, -Math.PI]} />
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Antenna_support_v3_1.geometry} material={nodes.Antenna_support_v3_1.material} position={[55.851, -13.288, 13.693]} rotation={[0, 0, -Math.PI]} />
            </group>
            <group position={[-40.796, -12.103, 46.648]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Open_CASCADE_STEP_translator_68_111_1.geometry} material={nodes.Open_CASCADE_STEP_translator_68_111_1.material} position={[0, 0, -0.412]} />
              <group position={[36.4, 30.4, -0.412]} rotation={[-Math.PI / 2, 0, 0]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.inductor_0805_1.geometry} material={nodes.inductor_0805_1.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.inductor_0805_2.geometry} material={nodes.inductor_0805_2.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.inductor_0805_3.geometry} material={nodes.inductor_0805_3.material} />
              </group>
              <group position={[36.4, 27.4, -0.793]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_4.geometry} material={nodes.LD033C153KAB2A_4.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_5.geometry} material={nodes.LD033C153KAB2A_5.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_6.geometry} material={nodes.LD033C153KAB2A_6.material} />
              </group>
              <group position={[36.4, 20.7, -0.793]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_7.geometry} material={nodes.LD033C153KAB2A_7.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_8.geometry} material={nodes.LD033C153KAB2A_8.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_9.geometry} material={nodes.LD033C153KAB2A_9.material} />
              </group>
              <group position={[31, 24.2, -0.793]} rotation={[-Math.PI, 0, 0]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_10.geometry} material={nodes.LD033C153KAB2A_10.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_11.geometry} material={nodes.LD033C153KAB2A_11.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_12.geometry} material={nodes.LD033C153KAB2A_12.material} />
              </group>
              <group position={[31, 30.15, -0.793]} rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_13.geometry} material={nodes.LD033C153KAB2A_13.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_14.geometry} material={nodes.LD033C153KAB2A_14.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.LD033C153KAB2A_15.geometry} material={nodes.LD033C153KAB2A_15.material} />
              </group>
              <group position={[31, 27.908, -0.812]} rotation={[-Math.PI, 0, 0]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.inductor_0603_2.geometry} material={nodes.inductor_0603_2.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.inductor_0603_3.geometry} material={nodes.inductor_0603_3.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.inductor_0603_4.geometry} material={nodes.inductor_0603_4.material} />
              </group>
              <group position={[36.4, 24.708, -0.812]} rotation={[-Math.PI, 0, 0]}>
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.inductor_0603_5.geometry} material={nodes.inductor_0603_5.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.inductor_0603_6.geometry} material={nodes.inductor_0603_6.material} />
                <mesh matrixWorldNeedsUpdate={true} geometry={nodes.inductor_0603_7.geometry} material={nodes.inductor_0603_7.material} />
              </group>
            </group>
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.PCB_RF_Antenna_v2_1.geometry} material={nodes.PCB_RF_Antenna_v2_1.material} position={[-17.396, -12.515, 22.248]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Histeresis_rods_2.geometry} material={nodes.Histeresis_rods_2.material} position={[-12.996, -13.015, 22.448]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Histeresis_rods_3.geometry} material={nodes.Histeresis_rods_3.material} position={[-27.296, -13.015, 21.948]} rotation={[0, Math.PI / 2, 0]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-6-8_8_18'].geometry} material={nodes['din_912-m1_6x0_35-6-8_8_18'].material} position={[-17.396, -9.615, 6.448]} rotation={[-Math.PI / 2, 0, -1.177]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m1_6x0_35-6-8_8_19'].geometry} material={nodes['din_912-m1_6x0_35-6-8_8_19'].material} position={[-17.396, -9.615, 38.448]} rotation={[-Math.PI / 2, 0, -0.269]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_26'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_26'].material} position={[-17.396, -13.515, 38.448]} rotation={[0, 1.122, Math.PI / 2]} />
            <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M1,6_-_ISO_27'].geometry} material={nodes['ISO_4035_-_M1,6_-_ISO_27'].material} position={[-17.396, -13.515, 6.448]} rotation={[-Math.PI, -1.433, -Math.PI / 2]} />
          </group>
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.H_Rod_4.geometry} material={nodes.H_Rod_4.material} position={[81.417, 17.791, 73.952]} rotation={[Math.PI / 2, 0, -0.544]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.H_Rod_5.geometry} material={nodes.H_Rod_5.material} position={[81.417, 17.791, 42.152]} rotation={[Math.PI / 2, 0, -0.175]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.H_Rod_6.geometry} material={nodes.H_Rod_6.material} position={[-22.383, 17.791, 73.952]} rotation={[Math.PI / 2, 0, 3.119]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.H_Rod_7.geometry} material={nodes.H_Rod_7.material} position={[-22.383, 17.791, 42.152]} rotation={[Math.PI / 2, 0, 1.209]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.H_Rod_PCB_v2_4.geometry} material={nodes.H_Rod_PCB_v2_4.material} position={[72.517, 15.691, 39.052]} rotation={[Math.PI / 2, 0, 0.818]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.H_Rod_PCB_v2_5.geometry} material={nodes.H_Rod_PCB_v2_5.material} position={[72.517, 15.691, 77.052]} rotation={[Math.PI / 2, 0, 1.809]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.H_Rod_PCB_v2_6.geometry} material={nodes.H_Rod_PCB_v2_6.material} position={[29.517, -38.309, 39.052]} rotation={[-Math.PI / 2, 0, -1.71]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.H_Rod_PCB_v2_7.geometry} material={nodes.H_Rod_PCB_v2_7.material} position={[29.517, -38.309, 77.052]} rotation={[-Math.PI / 2, 0, 1.511]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['Antenna_support_+Y_1'].geometry} material={nodes['Antenna_support_+Y_1'].material} position={[-18.883, 13.691, 58.052]} rotation={[Math.PI, Math.PI / 2, 0]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M2_-_ISO_8'].geometry} material={nodes['ISO_4035_-_M2_-_ISO_8'].material} position={[29.517, 13.691, 39.052]} rotation={[Math.PI, -0.311, -Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M2_-_ISO_9'].geometry} material={nodes['ISO_4035_-_M2_-_ISO_9'].material} position={[29.517, 13.691, 77.052]} rotation={[0, -1.099, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M2_-_ISO_10'].geometry} material={nodes['ISO_4035_-_M2_-_ISO_10'].material} position={[72.517, 13.691, 77.052]} rotation={[0, 0.831, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M2_-_ISO_11'].geometry} material={nodes['ISO_4035_-_M2_-_ISO_11'].material} position={[72.517, 13.691, 39.052]} rotation={[0, -0.444, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M2_-_ISO_12'].geometry} material={nodes['ISO_4035_-_M2_-_ISO_12'].material} position={[29.517, -37.609, 39.052]} rotation={[0, 1.039, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M2_-_ISO_13'].geometry} material={nodes['ISO_4035_-_M2_-_ISO_13'].material} position={[29.517, -37.609, 77.052]} rotation={[-Math.PI, 0.819, -Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M2_-_ISO_14'].geometry} material={nodes['ISO_4035_-_M2_-_ISO_14'].material} position={[72.517, -37.609, 39.052]} rotation={[0, -0.285, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M2_-_ISO_15'].geometry} material={nodes['ISO_4035_-_M2_-_ISO_15'].material} position={[72.517, -37.609, 77.052]} rotation={[0, 0.947, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M3_-_ISO_8'].geometry} material={nodes['ISO_4035_-_M3_-_ISO_8'].material} position={[-22.383, 15.691, 42.152]} rotation={[0, 0.764, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M3_-_ISO_9'].geometry} material={nodes['ISO_4035_-_M3_-_ISO_9'].material} position={[81.417, 13.691, 73.952]} rotation={[0, -0.586, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M3_-_ISO_10'].geometry} material={nodes['ISO_4035_-_M3_-_ISO_10'].material} position={[-22.383, 15.691, 73.952]} rotation={[0, -0.399, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M3_-_ISO_11'].geometry} material={nodes['ISO_4035_-_M3_-_ISO_11'].material} position={[81.417, 13.691, 42.152]} rotation={[0, 1.059, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M3_-_ISO_12'].geometry} material={nodes['ISO_4035_-_M3_-_ISO_12'].material} position={[81.417, -43.909, 42.152]} rotation={[Math.PI, 1.547, -Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M3_-_ISO_13'].geometry} material={nodes['ISO_4035_-_M3_-_ISO_13'].material} position={[81.417, -43.909, 73.952]} rotation={[0, 1.248, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M3_-_ISO_14'].geometry} material={nodes['ISO_4035_-_M3_-_ISO_14'].material} position={[-22.383, -43.909, 42.152]} rotation={[0, 0.857, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['ISO_4035_-_M3_-_ISO_15'].geometry} material={nodes['ISO_4035_-_M3_-_ISO_15'].material} position={[-22.383, -43.909, 73.952]} rotation={[0, 0.168, Math.PI / 2]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Spacer_1_mm_4.geometry} material={nodes.Spacer_1_mm_4.material} position={[72.517, -32.409, 39.052]} rotation={[Math.PI, -0.661, Math.PI]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Spacer_1_mm_5.geometry} material={nodes.Spacer_1_mm_5.material} position={[72.517, -32.409, 77.052]} rotation={[0, -1.01, 0]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Spacer_1_mm_6.geometry} material={nodes.Spacer_1_mm_6.material} position={[29.517, -32.409, 39.052]} rotation={[-Math.PI, 0.506, Math.PI]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Spacer_1_mm_7.geometry} material={nodes.Spacer_1_mm_7.material} position={[29.517, -32.409, 77.052]} rotation={[Math.PI, -0.729, Math.PI]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes.Spacer_2_mm_1.geometry} material={nodes.Spacer_2_mm_1.material} position={[29.517, 5.991, 39.052]} rotation={[0, -1.221, 0]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_16'].geometry} material={nodes['din_912-m3x0_5-6-8_8_16'].material} position={[81.417, -26.409, 83.052]} rotation={[0, 0, -1.003]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_17'].geometry} material={nodes['din_912-m3x0_5-6-8_8_17'].material} position={[81.417, 1.991, 83.052]} rotation={[0, 0, -0.217]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_18'].geometry} material={nodes['din_912-m3x0_5-6-8_8_18'].material} position={[-22.383, 1.991, 83.052]} rotation={[0, 0, 1.311]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_19'].geometry} material={nodes['din_912-m3x0_5-6-8_8_19'].material} position={[-22.383, -26.409, 83.052]} rotation={[0, 0, 1.774]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_20'].geometry} material={nodes['din_912-m3x0_5-6-8_8_20'].material} position={[81.417, 1.991, 33.052]} rotation={[Math.PI, 0, -0.165]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_21'].geometry} material={nodes['din_912-m3x0_5-6-8_8_21'].material} position={[81.417, -26.409, 33.052]} rotation={[Math.PI, 0, -1.986]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_22'].geometry} material={nodes['din_912-m3x0_5-6-8_8_22'].material} position={[-22.383, -26.409, 33.052]} rotation={[Math.PI, 0, -2.797]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_23'].geometry} material={nodes['din_912-m3x0_5-6-8_8_23'].material} position={[-22.383, 1.991, 33.052]} rotation={[Math.PI, 0, 0.32]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_24'].geometry} material={nodes['din_912-m3x0_5-6-8_8_24'].material} position={[-27.483, -31.409, 38.152]} rotation={[2.187, -Math.PI / 2, 0]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_25'].geometry} material={nodes['din_912-m3x0_5-6-8_8_25'].material} position={[-27.483, -31.409, 77.952]} rotation={[0.651, -Math.PI / 2, 0]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_26'].geometry} material={nodes['din_912-m3x0_5-6-8_8_26'].material} position={[-27.483, 6.991, 38.152]} rotation={[-2.185, -Math.PI / 2, 0]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_27'].geometry} material={nodes['din_912-m3x0_5-6-8_8_27'].material} position={[-27.483, 6.991, 77.952]} rotation={[-1.141, -Math.PI / 2, 0]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_28'].geometry} material={nodes['din_912-m3x0_5-6-8_8_28'].material} position={[86.517, 6.991, 38.152]} rotation={[2.903, Math.PI / 2, 0]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_29'].geometry} material={nodes['din_912-m3x0_5-6-8_8_29'].material} position={[86.517, -31.409, 38.152]} rotation={[1.852, Math.PI / 2, 0]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_30'].geometry} material={nodes['din_912-m3x0_5-6-8_8_30'].material} position={[86.517, 6.991, 77.952]} rotation={[-0.589, Math.PI / 2, 0]} />
          <mesh matrixWorldNeedsUpdate={true} geometry={nodes['din_912-m3x0_5-6-8_8_31'].geometry} material={nodes['din_912-m3x0_5-6-8_8_31'].material} position={[86.517, -31.409, 77.952]} rotation={[-2.729, Math.PI / 2, 0]} />
        </group>
      </group>
      <PerspectiveCamera makeDefault={false} far={844.573} near={504.259} fov={39.598} position={[-642.079, 162.42, 299.976]} rotation={[-0.191, -1.188, -0.178]} />
      <PerspectiveCamera makeDefault={false} far={641.202} near={301.953} fov={39.598} position={[-457.087, 160.06, 221.863]} rotation={[-0.242, -1.23, -0.228]} />
    </group>
  )
}
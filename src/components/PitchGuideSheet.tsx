import React from 'react';
import { useBudget } from '../context/BudgetContext';
import { 
  X, 
  CheckCircle2, 
  ShieldAlert, 
  SlidersHorizontal, 
  BookOpen, 
  Utensils, 
  ArrowRight,
  RefreshCw
} from 'lucide-react';

export const PitchGuideSheet: React.FC = () => {
  const { 
    closeSheet, 
    goToScreen, 
    simulateGoFoodTransaction, 
    triggerOverBudgetDemo, 
    resetDemoState,
    openSheet
  } = useBudget();

  return (
    <>
      <div className="bottom-sheet-backdrop" onClick={closeSheet} />
      <div className="bottom-sheet-content">
        <div className="sheet-handle-bar" />

        {/* Header */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px 10px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div 
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(0, 170, 19, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00d618'
              }}
            >
              <BookOpen size={18} />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff' }}>
                Panduan Evaluasi Konsep
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                GoPay "Budget & Spend" Enhancement
              </div>
            </div>
          </div>

          <button 
            onClick={closeSheet}
            style={{
              background: '#222933',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#cbd5e1',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Pitch Body */}
        <div style={{ padding: '16px 20px 32px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Executive Summary */}
          <div 
            style={{
              background: 'rgba(0, 174, 214, 0.1)',
              border: '1px solid rgba(0, 174, 214, 0.3)',
              borderRadius: '16px',
              padding: '12px 14px',
              fontSize: '12px',
              color: '#cbd5e1',
              lineHeight: 1.5
            }}
          >
            <strong style={{ color: '#ffffff' }}>Apa inti fitur baru ini?</strong><br />
            Enhancement pada Laporan Keuangan GoPay yang mengubah pencatatan pasif menjadi <strong>perencanaan anggaran aktif</strong>: membagi alokasi bulanan ke kategori, memberi panduan belanja harian, rekomendasi pas budget, dan realokasi dinamis saat minus tanpa menambah total pengeluaran.
          </div>

          {/* 5 Core Feature Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#ffffff' }}>
              5 PILAR UTAMA ENHANCEMENT:
            </div>

            {/* 1 */}
            <div style={{ background: '#19202a', padding: '10px 12px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                <CheckCircle2 size={15} color="#00d618" />
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff' }}>1. Alokasi Kategori (No Saving)</span>
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                100% budget bulanan (Rp3jt) dibagi ke pengeluaran riil: Makanan (30%), Umum (20%), Transport (20%), Belanja (15%), Gaya Hidup (15%). Tidak ada tabungan/investasi di sini.
              </div>
            </div>

            {/* 2 */}
            <div style={{ background: '#19202a', padding: '10px 12px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                <CheckCircle2 size={15} color="#00d618" />
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff' }}>2. Simulasi Budget Harian</span>
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                Sisa budget dihitung otomatis ke kuota harian dengan bobot Weekday (1.0) vs Weekend (1.25). Memberi tahu user berapa batas aman belanja hari ini.
              </div>
            </div>

            {/* 3 */}
            <div style={{ background: '#19202a', padding: '10px 12px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                <CheckCircle2 size={15} color="#00d618" />
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff' }}>3. Rekomendasi Kontekstual</span>
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                Menampilkan menu GoFood atau promo GoRide yang harganya persis di bawah sisa kuota harian user (misal Sei Sapi Rp18rb).
              </div>
            </div>

            {/* 4 */}
            <div style={{ background: '#19202a', padding: '10px 12px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                <CheckCircle2 size={15} color="#00d618" />
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff' }}>4. Dynamic Budget Reallocation</span>
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                Jika Makanan minus Rp30rb, user bisa geser surplus dari kategori Umum tanpa menambah total budget bulanan (zero-sum redistribution).
              </div>
            </div>

            {/* 5 */}
            <div style={{ background: '#19202a', padding: '10px 12px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                <CheckCircle2 size={15} color="#00d618" />
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff' }}>5. Supportive Notification Toast</span>
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                Reminder pasca-transaksi yang ramah ("Masih aman untuk 1x makan ringan hari ini") tanpa mempermalukan user.
              </div>
            </div>
          </div>

          {/* Quick Interactive Demo Flow Jumps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8' }}>
              JALUR PRESENTASI 2 MENIT (KLIK UNTUK DEMO):
            </div>

            <button 
              onClick={() => {
                closeSheet();
                goToScreen('home');
              }}
              style={{
                background: '#222933',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '10px 14px',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 700,
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>1. Mulai dari Beranda GoPay</span>
              <ArrowRight size={14} color="#00d618" />
            </button>

            <button 
              onClick={() => {
                closeSheet();
                goToScreen('report');
              }}
              style={{
                background: '#222933',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '10px 14px',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 700,
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>2. Masuk ke Laporan Keuangan (Budget & Spend)</span>
              <ArrowRight size={14} color="#00d618" />
            </button>

            <button 
              onClick={() => {
                closeSheet();
                goToScreen('report');
                simulateGoFoodTransaction();
              }}
              style={{
                background: '#222933',
                border: '1px solid rgba(0, 174, 214, 0.3)',
                borderRadius: '12px',
                padding: '10px 14px',
                color: '#38bdf8',
                fontSize: '12px',
                fontWeight: 700,
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>3. Simulasikan Transaksi GoFood Rp28.000</span>
              <Utensils size={14} color="#00aed6" />
            </button>

            <button 
              onClick={() => {
                closeSheet();
                triggerOverBudgetDemo();
                goToScreen('report');
              }}
              style={{
                background: '#222933',
                border: '1px solid rgba(255, 67, 67, 0.3)',
                borderRadius: '12px',
                padding: '10px 14px',
                color: '#ff7070',
                fontSize: '12px',
                fontWeight: 700,
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>4. Trigger Kondisi Makanan Over-Budget (+Rp30rb)</span>
              <ShieldAlert size={14} color="#ff4343" />
            </button>

            <button 
              onClick={() => {
                closeSheet();
                openSheet('reallocate');
              }}
              style={{
                background: '#222933',
                border: '1px solid rgba(0, 170, 19, 0.3)',
                borderRadius: '12px',
                padding: '10px 14px',
                color: '#00d618',
                fontSize: '12px',
                fontWeight: 700,
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>5. Buka Realokasi Budget (Pindahkan Umum ke Makanan)</span>
              <SlidersHorizontal size={14} color="#00d618" />
            </button>

            <button 
              onClick={() => {
                resetDemoState();
                closeSheet();
              }}
              style={{
                marginTop: '4px',
                background: 'transparent',
                border: '1px dashed rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '10px 14px',
                color: '#94a3b8',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <RefreshCw size={13} />
              <span>Reset State ke Semula</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PitchGuideSheet;

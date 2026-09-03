import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import { 
  Home, 
  PieChart, 
  Clock, 
  User, 
  QrCode, 
  Wifi, 
  Battery, 
  Signal, 
  Sparkles, 
  RefreshCw, 
  AlertTriangle, 
  Utensils, 
  Info,
  Maximize2,
  Minimize2,
  CheckCircle2,
  X,
  ArrowUp,
  Zap
} from 'lucide-react';
import HomePage from '../screens/HomePage';
import ReportPage from '../screens/ReportPage';
import CategoryDetailSheet from './CategoryDetailSheet';
import BudgetReallocationSheet from './BudgetReallocationSheet';
import RecommendationSheet from './RecommendationSheet';
import PitchGuideSheet from './PitchGuideSheet';

export const MobileFrame: React.FC = () => {
  const { 
    state, 
    goToScreen, 
    setReportTab,
    dismissToast, 
    simulateGoFoodTransaction, 
    triggerOverBudgetDemo, 
    resetDemoState, 
    openSheet 
  } = useBudget();

  const [currentTime] = useState('15.10');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFabMenuOpen, setIsFabMenuOpen] = useState(false);

  return (
    <div className="app-viewport-wrapper">
      {/* Mobile Device Container */}
      <div 
        className="mobile-device-frame"
        style={isFullscreen ? { width: '100vw', height: '100vh', borderRadius: 0, boxShadow: 'none' } : {}}
      >
        {/* Native Mobile Status Bar */}
        <div className="mobile-status-bar">
          <span style={{ fontWeight: 700, letterSpacing: '-0.2px' }}>{currentTime}</span>

          {/* Dynamic Island / Speaker Pill */}
          <div className="status-bar-dynamic-island">
            <div className="island-camera-lens" />
          </div>

          <div className="status-bar-icons">
            <Signal size={13} strokeWidth={2.4} />
            <span style={{ fontSize: '11px', fontWeight: 700, marginRight: '2px' }}>4G</span>
            <Wifi size={13} strokeWidth={2.4} />
            <Battery size={15} strokeWidth={2.4} fill="#ffffff" />
          </div>
        </div>

        {/* Floating Notification Toast */}
        {state.notificationToast && (
          <div 
            key={`${state.notificationToast.title}-${state.notificationToast.message}`}
            className="gopay-notification-toast"
            style={{
              borderColor: state.notificationToast.type === 'warning' 
                ? 'rgba(255, 67, 67, 0.4)' 
                : state.notificationToast.type === 'success' 
                ? 'rgba(0, 214, 24, 0.4)' 
                : 'rgba(0, 174, 214, 0.4)',
              background: '#161c24'
            }}
          >
            <div 
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: state.notificationToast.type === 'warning' 
                  ? 'rgba(255, 67, 67, 0.15)' 
                  : state.notificationToast.type === 'success' 
                  ? 'rgba(0, 214, 24, 0.15)' 
                  : 'rgba(0, 174, 214, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              {state.notificationToast.type === 'warning' ? (
                <AlertTriangle size={20} color="#ff4343" />
              ) : state.notificationToast.type === 'success' ? (
                <CheckCircle2 size={20} color="#00d618" />
              ) : (
                <Sparkles size={20} color="#00aed6" />
              )}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                {state.notificationToast.title}
              </div>
              <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.4 }}>
                {state.notificationToast.message}
              </div>
              {state.notificationToast.submessage && (
                <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '3px', fontWeight: 500 }}>
                  {state.notificationToast.submessage}
                </div>
              )}
            </div>
            <button 
              onClick={dismissToast}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Scrollable Screen Content */}
        <div className="mobile-screen-viewport">
          {state.activeScreen === 'home' ? <HomePage /> : <ReportPage />}
        </div>

        {/* Floating Bottom Navigation Bar (GoPay Style) */}
        <div className="gopay-bottom-nav">
          <button 
            className={`bottom-nav-item ${state.activeScreen === 'home' ? 'active' : ''}`}
            onClick={() => goToScreen('home')}
          >
            <Home size={22} strokeWidth={state.activeScreen === 'home' ? 2.5 : 1.8} />
            <span>Beranda</span>
          </button>

          <button 
            className={`bottom-nav-item ${state.activeScreen === 'report' ? 'active' : ''}`}
            onClick={() => goToScreen('report')}
          >
            <PieChart size={22} strokeWidth={state.activeScreen === 'report' ? 2.5 : 1.8} />
            <span>Keuangan</span>
          </button>

          {/* QRIS elevated Center Button */}
          <div 
            className="bottom-nav-qris-btn"
            title="Scan QRIS"
            onClick={() => {
              if (state.activeScreen === 'home') {
                goToScreen('report');
              } else {
                openSheet('recommendations');
              }
            }}
          >
            <QrCode size={25} strokeWidth={2.3} />
          </div>

          <button 
            className="bottom-nav-item"
            onClick={() => {
              goToScreen('report');
              setTimeout(() => {
                const el = document.getElementById('history-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
          >
            <Clock size={22} strokeWidth={1.8} />
            <span>Riwayat</span>
          </button>

          <button 
            className="bottom-nav-item"
            onClick={() => openSheet('pitch-guide')}
          >
            <User size={22} strokeWidth={1.8} />
            <span>Profil</span>
          </button>
        </div>

        {/* Native Home Indicator Bar */}
        <div className="mobile-home-indicator-bar">
          <div className="home-indicator-pill" />
        </div>

        {/* Active Bottom Sheets */}
        {state.activeSheet === 'category-detail' && <CategoryDetailSheet />}
        {state.activeSheet === 'reallocate' && <BudgetReallocationSheet />}
        {state.activeSheet === 'recommendations' && <RecommendationSheet />}
        {state.activeSheet === 'pitch-guide' && <PitchGuideSheet />}
      </div>

      {/* Evaluator Presentation Dock (Visible on Desktop only) */}
      <div className="evaluator-demo-dock desktop-only-dock">
        <button 
          className={`demo-dock-btn ${state.activeScreen === 'home' ? 'active' : ''}`}
          onClick={() => goToScreen('home')}
          title="Buka Beranda GoPay"
        >
          <Home size={13} />
          <span>Beranda</span>
        </button>

        <button 
          className={`demo-dock-btn ${state.activeScreen === 'report' && state.activeReportTab === 'income' ? 'active' : ''}`}
          onClick={() => {
            setReportTab('income');
            goToScreen('report');
          }}
          title="Buka Laporan Pemasukan (Pusat Budget & Spend Planner)"
          style={{ background: 'rgba(0, 170, 19, 0.15)', borderColor: 'rgba(0, 170, 19, 0.4)', color: '#4ade80' }}
        >
          <PieChart size={13} />
          <span>Pemasukan (Planner)</span>
        </button>

        <button 
          className={`demo-dock-btn ${state.activeScreen === 'report' && state.activeReportTab === 'expense' ? 'active' : ''}`}
          onClick={() => {
            setReportTab('expense');
            goToScreen('report');
          }}
          title="Buka Laporan Pengeluaran (Tampilan Standard GoPay)"
        >
          <ArrowUp size={13} />
          <span>Pengeluaran (Asli)</span>
        </button>

        <button 
          className="demo-dock-btn"
          onClick={simulateGoFoodTransaction}
          title="Simulasikan transaksi GoFood Rp28.000 (Demo Flow E)"
          style={{ background: 'rgba(0, 174, 214, 0.2)', borderColor: 'rgba(0, 174, 214, 0.4)' }}
        >
          <Utensils size={13} color="#00aed6" />
          <span>Simulasi GoFood (28k)</span>
        </button>

        <button 
          className="demo-dock-btn alert"
          onClick={() => {
            triggerOverBudgetDemo();
            goToScreen('report');
          }}
          title="Simulasikan Makanan Over-Budget Rp30.000 (Demo Flow D)"
        >
          <AlertTriangle size={13} />
          <span>Tes Over-Budget</span>
        </button>

        <button 
          className="demo-dock-btn"
          onClick={resetDemoState}
          title="Reset semua data ke kondisi awal demo"
        >
          <RefreshCw size={13} />
          <span>Reset</span>
        </button>

        <button 
          className="demo-dock-btn"
          onClick={() => openSheet('pitch-guide')}
          title="Buka Panduan Evaluasi & Konsep Fitur"
          style={{ background: 'rgba(0, 170, 19, 0.2)', borderColor: 'rgba(0, 170, 19, 0.4)', color: '#4ade80' }}
        >
          <Info size={13} />
          <span>Konsep & Pitch</span>
        </button>

        <button 
          className="demo-dock-btn"
          onClick={() => setIsFullscreen(!isFullscreen)}
          title="Toggle Tampilan Penuh / Frame HP"
        >
          {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
        </button>
      </div>

      {/* Mobile-Only Floating Action Button (FAB) & Mini Sheet */}
      <div className="mobile-only-fab-container">
        <button 
          onClick={() => setIsFabMenuOpen(true)}
          className="mobile-fab-trigger"
          title="Buka Menu Simulasi & Evaluator"
        >
          <Zap size={18} color="#00aed6" />
        </button>

        {/* Mobile FAB Bottom Sheet Modal */}
        {isFabMenuOpen && (
          <div className="mobile-fab-overlay" onClick={() => setIsFabMenuOpen(false)}>
            <div className="mobile-fab-sheet" onClick={e => e.stopPropagation()}>
              <div className="mobile-fab-sheet-handle" />
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px 8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgba(0, 174, 214, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Zap size={14} color="#00aed6" />
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff' }}>Panel Simulasi Evaluator</span>
                </div>
                <button 
                  onClick={() => setIsFabMenuOpen(false)}
                  style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', cursor: 'pointer' }}
                >
                  <X size={15} />
                </button>
              </div>

              <div style={{ padding: '10px 18px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Navigation Group */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={() => { goToScreen('home'); setIsFabMenuOpen(false); }}
                    style={{ flex: 1, padding: '10px', borderRadius: '12px', background: state.activeScreen === 'home' ? '#00aed6' : '#1f2631', color: state.activeScreen === 'home' ? '#000' : '#fff', border: 'none', fontWeight: 700, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <Home size={14} />
                    <span>Beranda</span>
                  </button>

                  <button 
                    onClick={() => { setReportTab('expense'); goToScreen('report'); setIsFabMenuOpen(false); }}
                    style={{ flex: 1, padding: '10px', borderRadius: '12px', background: state.activeScreen === 'report' && state.activeReportTab === 'expense' ? '#00aed6' : '#1f2631', color: state.activeScreen === 'report' && state.activeReportTab === 'expense' ? '#000' : '#fff', border: 'none', fontWeight: 700, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <ArrowUp size={14} />
                    <span>Pengeluaran</span>
                  </button>

                  <button 
                    onClick={() => { setReportTab('income'); goToScreen('report'); setIsFabMenuOpen(false); }}
                    style={{ flex: 1, padding: '10px', borderRadius: '12px', background: state.activeScreen === 'report' && state.activeReportTab === 'income' ? '#00aa13' : '#1f2631', color: state.activeScreen === 'report' && state.activeReportTab === 'income' ? '#fff' : '#4ade80', border: 'none', fontWeight: 700, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <PieChart size={14} />
                    <span>Pemasukan</span>
                  </button>
                </div>

                {/* Simulation Action Buttons */}
                <button 
                  onClick={() => { simulateGoFoodTransaction(); setIsFabMenuOpen(false); }}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', background: 'rgba(0, 174, 214, 0.15)', border: '1px solid rgba(0, 174, 214, 0.4)', color: '#38bdf8', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Utensils size={16} />
                    <span>Simulasi GoFood (28k)</span>
                  </div>
                  <span style={{ fontSize: '10px', color: '#94a3b8' }}>Tes Notif & Saldo</span>
                </button>

                <button 
                  onClick={() => { triggerOverBudgetDemo(); goToScreen('report'); setIsFabMenuOpen(false); }}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', background: 'rgba(255, 67, 67, 0.15)', border: '1px solid rgba(255, 67, 67, 0.4)', color: '#ff7070', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertTriangle size={16} />
                    <span>Tes Over-Budget (30k)</span>
                  </div>
                  <span style={{ fontSize: '10px', color: '#fca5a5' }}>Tes Realokasi</span>
                </button>

                {/* Helper & Reset Buttons */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                  <button 
                    onClick={() => { resetDemoState(); setIsFabMenuOpen(false); }}
                    style={{ flex: 1, padding: '10px', borderRadius: '12px', background: '#1c222b', border: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1', fontWeight: 600, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <RefreshCw size={13} />
                    <span>Reset Data</span>
                  </button>

                  <button 
                    onClick={() => { openSheet('pitch-guide'); setIsFabMenuOpen(false); }}
                    style={{ flex: 1, padding: '10px', borderRadius: '12px', background: 'rgba(0, 170, 19, 0.15)', border: '1px solid rgba(0, 170, 19, 0.35)', color: '#4ade80', fontWeight: 600, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <Info size={13} />
                    <span>Konsep & Pitch</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileFrame;

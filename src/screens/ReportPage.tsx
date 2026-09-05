import React from 'react';
import { useBudget } from '../context/BudgetContext';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus,
  ArrowUp, 
  ArrowDown, 
  AlertTriangle, 
  ArrowRight, 
  Sparkles, 
  Utensils, 
  Car, 
  ShoppingBag, 
  Shirt, 
  ArrowUpRight, 
  FileText,
  Sliders,
  Wallet
} from 'lucide-react';
import { CategoryId } from '../types/budget';

export const ReportPage: React.FC = () => {
  const { 
    state, 
    goToScreen, 
    setReportTab,
    openSheet,
    simulateGoFoodTransaction,
    triggerOverBudgetDemo,
    updateCategoryPercentage
  } = useBudget();

  const activeTab = state.activeReportTab;
  const setActiveTab = setReportTab;

  // Check if any category is over budget
  const overBudgetCat = state.categories.find(c => c.spent > c.monthlyBudget);
  const foodCat = state.categories.find(c => c.id === 'food');
  const totalAllocatedPct = state.categories.reduce((acc, c) => acc + c.percentage, 0);

  const getCategoryIcon = (id: CategoryId) => {
    switch (id) {
      case 'food': return <Utensils size={18} color="#ffffff" />;
      case 'general': return <ArrowUpRight size={18} color="#ffffff" />;
      case 'transport': return <Car size={18} color="#ffffff" />;
      case 'shopping': return <ShoppingBag size={18} color="#ffffff" />;
      case 'lifestyle': return <Shirt size={18} color="#ffffff" />;
      default: return <ArrowUpRight size={18} color="#ffffff" />;
    }
  };

  const getTransactionIcon = (service: string, catId: CategoryId) => {
    if (service === 'gofood' || catId === 'food') {
      return (
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ff4d4f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Utensils size={19} color="#ffffff" />
        </div>
      );
    }
    if (service === 'goride' || catId === 'transport') {
      return (
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00aa13', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Car size={19} color="#ffffff" />
        </div>
      );
    }
    if (catId === 'lifestyle') {
      return (
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Shirt size={19} color="#ffffff" />
        </div>
      );
    }
    return (
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00aed6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ArrowUpRight size={19} color="#ffffff" />
      </div>
    );
  };

  return (
    <div style={{ paddingBottom: '95px', background: '#0e1216', minHeight: '100%' }}>
      {/* Top Header Bar */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 18px',
          position: 'sticky',
          top: 0,
          background: 'rgba(14, 18, 22, 0.95)',
          backdropFilter: 'blur(12px)',
          zIndex: 80,
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={() => goToScreen('home')}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px'
            }}
            title="Kembali ke Beranda"
          >
            <ArrowLeft size={20} />
          </button>
          <span style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.3px' }}>
            Laporan keuangan
          </span>
        </div>

        <button 
          style={{
            background: 'none',
            border: 'none',
            color: '#7c7c7cff',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '11px',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          <Plus size={14} />
          <span>{activeTab === 'expense' ? 'Catat pengeluaran' : 'Catat pemasukan'}</span>
        </button>
      </div>

      <div style={{ padding: '14px 16px' }}>
        {/* Month Selector Ruler / Dial Container */}
        <div 
          style={{
            background: '#161b22',
            borderRadius: '20px',
            padding: '12px 16px 14px',
            border: '1px solid rgba(255, 255, 255, 0.07)',
            marginBottom: '14px',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#202630', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <ChevronLeft size={18} color="#00d618" />
            </div>

            {/* Dial Text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Agu 2026</span>
              <span style={{ fontSize: '15px', color: '#ffffff', fontWeight: 800 }}>Sep 2026</span>
            </div>

            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#202630', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <ChevronRight size={18} color="#00d618" />
            </div>
          </div>

          {/* Dial Tick Marks with Center Red Line */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '7px', height: '14px' }}>
            <div style={{ width: '1.5px', height: '7px', background: '#334155' }} />
            <div style={{ width: '1.5px', height: '10px', background: '#334155' }} />
            <div style={{ width: '1.5px', height: '7px', background: '#334155' }} />
            <div style={{ width: '1.5px', height: '7px', background: '#334155' }} />
            <div style={{ width: '2.5px', height: '14px', background: '#ef4444', borderRadius: '2px' }} />
            <div style={{ width: '1.5px', height: '7px', background: '#334155' }} />
            <div style={{ width: '1.5px', height: '7px', background: '#334155' }} />
            <div style={{ width: '1.5px', height: '10px', background: '#334155' }} />
            <div style={{ width: '1.5px', height: '7px', background: '#334155' }} />
          </div>

          {/* Toggle Tabs: Pengeluaran vs Pemasukan */}
          <div 
            style={{
              display: 'flex',
              background: '#0e1216',
              borderRadius: '12px',
              padding: '3px',
              marginTop: '12px'
            }}
          >
            <button 
              onClick={() => setActiveTab('expense')}
              style={{
                flex: 1,
                padding: '8px 0',
                border: 'none',
                borderRadius: '10px',
                background: activeTab === 'expense' ? '#222933' : 'transparent',
                color: activeTab === 'expense' ? '#ffffff' : '#94a3b8',
                fontSize: '12px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ArrowUp size={14} color="#00aed6" />
              <span>Pengeluaran</span>
            </button>

            <button 
              className="demo-glow-green"
              onClick={() => setActiveTab('income')}
              style={{
                flex: 1,
                padding: '8px 0',
                border: 'none',
                borderRadius: '10px',
                background: activeTab === 'income' ? '#222933' : 'transparent',
                color: activeTab === 'income' ? '#ffffff' : '#94a3b8',
                fontSize: '12px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ArrowDown size={14} color="#00d618" />
              <span>Pemasukan</span>
              <span style={{ fontSize: '9px', background: '#00aa13', color: '#fff', padding: '1px 5px', borderRadius: '999px', marginLeft: '2px' }}>
                Planner
              </span>
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* MODE 1: PENGELUARAN (Tampilan Asli GoPay Standard)           */}
        {/* ============================================================ */}
        {activeTab === 'expense' ? (
          <div>
            {/* Standard GoPay Total Pengeluaran Card */}
            <div 
              style={{ 
                background: '#181d24', 
                borderRadius: '20px', 
                padding: '16px', 
                border: '1px solid rgba(255, 255, 255, 0.07)', 
                marginBottom: '14px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>Total pengeluaran bulan ini</span>
                <span style={{ fontSize: '11px', color: '#00aed6', fontWeight: 600 }}>Sep 2026</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px', marginBottom: '10px' }}>
                Rp{state.totalSpent.toLocaleString('id-ID')}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#94a3b8', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span>Rata-rata: <strong style={{ color: '#ffffff' }}>Rp60.667 / hari</strong></span>
                <span>{state.transactions.length} transaksi tercatat</span>
              </div>
            </div>

            {/* Weekly Spending Bar Chart (reportpage_2.jpeg) */}
            <div 
              style={{
                background: '#181d24',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                padding: '16px',
                marginBottom: '16px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>Pengeluaran minggu ini</div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>Rp124.400</div>
                </div>
                <div style={{ fontSize: '10px', color: '#64748b' }}>
                  Target: ~Rp250rb
                </div>
              </div>

              {/* Bar Chart Visualization with Dedicated Left Y-Axis */}
              <div style={{ display: 'flex', height: '135px', position: 'relative', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '22px' }}>
                <div style={{ width: '38px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '2px', fontSize: '9px', color: '#64748b', textAlign: 'right', paddingRight: '8px', borderRight: '1px dashed rgba(255, 255, 255, 0.1)', flexShrink: 0 }}>
                  <span>600rb</span>
                  <span>400rb</span>
                  <span>200rb</span>
                  <span>0</span>
                </div>

                <div style={{ position: 'absolute', left: '38px', right: 0, top: '4px', height: '1px', background: 'rgba(255, 255, 255, 0.04)' }} />
                <div style={{ position: 'absolute', left: '38px', right: 0, top: '38px', height: '1px', background: 'rgba(255, 255, 255, 0.04)' }} />
                <div style={{ position: 'absolute', left: '38px', right: 0, top: '74px', height: '1px', background: 'rgba(255, 255, 255, 0.04)' }} />

                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingLeft: '8px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                      <div style={{ width: '11px', height: '55px', background: 'repeating-linear-gradient(45deg, #334155, #334155 3px, #475569 3px, #475569 6px)', borderRadius: '3px 3px 0 0' }} />
                      <div style={{ width: '11px', height: '10px', background: '#00aed6', borderRadius: '3px 3px 0 0' }} />
                    </div>
                    <span style={{ fontSize: '8px', color: '#94a3b8' }}>27-2</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                      <div style={{ width: '11px', height: '15px', background: 'repeating-linear-gradient(45deg, #334155, #334155 3px, #475569 3px, #475569 6px)', borderRadius: '3px 3px 0 0' }} />
                      <div style={{ width: '11px', height: '24px', background: '#00d618', borderRadius: '3px 3px 0 0' }} />
                    </div>
                    <span style={{ fontSize: '8px', color: '#00d618', fontWeight: 700 }}>3-9</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                      <div style={{ width: '11px', height: '15px', background: 'repeating-linear-gradient(45deg, #334155, #334155 3px, #475569 3px, #475569 6px)', borderRadius: '3px 3px 0 0' }} />
                      <div style={{ width: '11px', height: '0px', background: '#00aed6' }} />
                    </div>
                    <span style={{ fontSize: '8px', color: '#64748b' }}>10-16</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                      <div style={{ width: '11px', height: '40px', background: 'repeating-linear-gradient(45deg, #334155, #334155 3px, #475569 3px, #475569 6px)', borderRadius: '3px 3px 0 0' }} />
                      <div style={{ width: '11px', height: '0px', background: '#00aed6' }} />
                    </div>
                    <span style={{ fontSize: '8px', color: '#64748b' }}>17-23</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                      <div style={{ width: '11px', height: '85px', background: 'repeating-linear-gradient(45deg, #334155, #334155 3px, #475569 3px, #475569 6px)', borderRadius: '3px 3px 0 0' }} />
                      <div style={{ width: '11px', height: '0px', background: '#00aed6' }} />
                    </div>
                    <span style={{ fontSize: '8px', color: '#64748b' }}>24-30</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
                      <div style={{ width: '11px', height: '45px', background: 'repeating-linear-gradient(45deg, #334155, #334155 3px, #475569 3px, #475569 6px)', borderRadius: '3px 3px 0 0' }} />
                      <div style={{ width: '11px', height: '26px', background: '#00aed6', borderRadius: '3px 3px 0 0' }} />
                    </div>
                    <span style={{ fontSize: '8px', color: '#64748b' }}>31-6</span>
                  </div>
                </div>
              </div>

              {/* Chart Legend */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: '#94a3b8' }}>
                  <div style={{ width: '12px', height: '8px', background: 'repeating-linear-gradient(45deg, #334155, #334155 2px, #475569 2px, #475569 4px)', borderRadius: '2px' }} />
                  <span>Bulan sebelumnya</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: '#94a3b8' }}>
                  <div style={{ width: '12px', height: '8px', background: '#00d618', borderRadius: '2px' }} />
                  <span>Bulan ini</span>
                </div>
              </div>
            </div>

            {/* Kategori Pengeluaran (Standard GoPay reportpage_3.jpeg) */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>
                  Kategori pengeluaran
                </span>
                <span style={{ fontSize: '11px', color: '#64748b' }}>
                  5 kategori
                </span>
              </div>

              <div style={{ background: '#181d24', borderRadius: '22px', border: '1px solid rgba(255, 255, 255, 0.07)', overflow: 'hidden' }}>
                {state.categories.map((cat, idx) => {
                  const pctOfTotal = Math.round((cat.spent / state.totalSpent) * 100);
                  return (
                    <div 
                      key={cat.id}
                      style={{
                        padding: '14px 16px',
                        borderBottom: idx < state.categories.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div 
                          style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            background: cat.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {getCategoryIcon(cat.id)}
                        </div>

                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                            {cat.indonesianName}
                          </div>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                            {pctOfTotal}% dari total belanja
                          </div>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                          Rp{cat.spent.toLocaleString('id-ID')}
                        </div>
                        <div style={{ fontSize: '10px', color: '#64748b' }}>
                          Terpakai
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Riwayat Pengeluaran (Normal GoPay) */}
            <div id="history-section" style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>
                  Riwayat pengeluaran
                </span>
                <span style={{ fontSize: '11px', color: '#64748b' }}>
                  {state.transactions.length} transaksi
                </span>
              </div>

              <div style={{ background: '#181d24', borderRadius: '22px', border: '1px solid rgba(255, 255, 255, 0.07)', overflow: 'hidden' }}>
                {state.transactions.map((tx, idx) => (
                  <div 
                    key={tx.id}
                    style={{
                      padding: '14px 16px',
                      borderBottom: idx < state.transactions.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {getTransactionIcon(tx.serviceType, tx.category)}
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                          {tx.merchant}
                        </div>
                        <div style={{ fontSize: '10.5px', color: '#94a3b8' }}>
                          {tx.categoryName} • {tx.dateStr}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                        -Rp{tx.amount.toLocaleString('id-ID')}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', fontSize: '9.5px', color: '#38bdf8' }}>
                        <span>{tx.paymentMethod}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* "Ada pengeluaran di luar Go..." Card */}
            <div 
              style={{
                background: '#181d24',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#ec4899', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={20} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                    Ada pengeluaran di luar Go...
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#94a3b8' }}>
                    Daripada di buku, catat aja di sini biar sekalian kerekam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ============================================================ */
          /* MODE 2: PEMASUKAN (PUSAT INOVASI PERSONAL BUDGET PLANNING)    */
          /* ============================================================ */
          <div>
            {/* HERO SUMMARY CARD: PEMASUKAN BULAN INI & ALOKASI BUDGET */}
            <div className="gopay-gradient-border-card" style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Wallet size={15} color="#00d618" />
                  <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>
                    Total pemasukan bulan ini
                  </span>
                </div>
                <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>
                  Sep 2026
                </span>
              </div>

              {/* Total Income Display */}
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px', marginBottom: '12px' }}>
                Rp{state.totalMonthlyIncome.toLocaleString('id-ID')}
              </div>

              {/* Progress Bar Allocation */}
              <div style={{ height: '7px', background: '#252d38', borderRadius: '999px', overflow: 'hidden', marginBottom: '8px' }}>
                <div 
                  style={{
                    width: `${Math.min(100, totalAllocatedPct)}%`,
                    height: '100%',
                    background: totalAllocatedPct === 100 
                      ? 'linear-gradient(90deg, #00aed6, #00d618)' 
                      : totalAllocatedPct > 100 
                      ? '#ef4444' 
                      : '#f59e0b',
                    borderRadius: '999px',
                    transition: 'width 0.4s ease'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px' }}>
                <span style={{ color: totalAllocatedPct === 100 ? '#00d618' : totalAllocatedPct > 100 ? '#ef4444' : '#f59e0b', fontWeight: 700 }}>
                  {totalAllocatedPct === 100 ? '✓ 100% Pemasukan Teralokasi' : totalAllocatedPct > 100 ? `⚠️ Melebihi 100% (${totalAllocatedPct}%)` : `Belum 100% (${totalAllocatedPct}%)`}
                </span>
                <span style={{ color: '#cbd5e1' }}>
                  Total Budget: <strong>Rp{state.totalMonthlyBudget.toLocaleString('id-ID')}</strong>
                </span>
              </div>
            </div>

            {/* INTERACTIVE DEMO CONTROLLER (GoFood & Over-budget test) */}
            <div 
              style={{
                background: '#161c24',
                border: '1px dashed rgba(0, 174, 214, 0.4)',
                borderRadius: '16px',
                padding: '12px 14px',
                marginBottom: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', fontWeight: 700, color: '#38bdf8' }}>
                  <Sparkles size={14} color="#00aed6" />
                  <span>Simulasi Transaksi & Skenario:</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={simulateGoFoodTransaction}
                  style={{
                    flex: 1,
                    background: 'rgba(0, 174, 214, 0.15)',
                    border: '1px solid rgba(0, 174, 214, 0.4)',
                    borderRadius: '10px',
                    padding: '8px 10px',
                    color: '#38bdf8',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px'
                  }}
                >
                  <Utensils size={13} />
                  <span>GoFood 28rb</span>
                </button>

                <button 
                  onClick={triggerOverBudgetDemo}
                  style={{
                    flex: 1,
                    background: 'rgba(255, 67, 67, 0.15)',
                    border: '1px solid rgba(255, 67, 67, 0.4)',
                    borderRadius: '10px',
                    padding: '8px 10px',
                    color: '#ff7070',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px'
                  }}
                >
                  <AlertTriangle size={13} />
                  <span>Over-Budget 30rb</span>
                </button>
              </div>
            </div>

            {/* CONDITIONAL ALERT: OVER BUDGET WARNING BANNER */}
            {overBudgetCat && (
              <div 
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 67, 67, 0.2) 0%, rgba(20, 24, 30, 0.9) 100%)',
                  border: '1.5px solid #ff4343',
                  borderRadius: '18px',
                  padding: '14px 16px',
                  marginBottom: '14px',
                  boxShadow: '0 4px 18px rgba(255, 67, 67, 0.25)',
                  animation: 'slideDownToast 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(255, 67, 67, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <AlertTriangle size={18} color="#ff4343" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                      {overBudgetCat.indonesianName} Melebihi Budget!
                    </div>
                    <div style={{ fontSize: '11.5px', color: '#fca5a5', marginTop: '2px', lineHeight: 1.4 }}>
                      Budget Rp{overBudgetCat.monthlyBudget.toLocaleString('id-ID')} • Terpakai Rp{overBudgetCat.spent.toLocaleString('id-ID')} (Lebih Rp{(overBudgetCat.spent - overBudgetCat.monthlyBudget).toLocaleString('id-ID')})
                    </div>
                    <button 
                      onClick={() => openSheet('reallocate')}
                      style={{
                        marginTop: '10px',
                        background: '#ff4343',
                        border: 'none',
                        borderRadius: '999px',
                        padding: '6px 14px',
                        color: '#ffffff',
                        fontSize: '11.5px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <span>Atur ulang budget</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* CORE INNOVATION: ATUR PERSENTASE ALOKASI BUDGET PEMASUKAN */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sliders size={15} color="#00d618" />
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>
                    Alokasi Pemasukan
                  </span>
                </div>
                <span 
                  onClick={() => openSheet('pitch-guide')}
                  style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 600, cursor: 'pointer' }}
                >
                  Info
                </span>
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '12px', lineHeight: 1.4 }}>
                Atur persentase alokasi setiap kebutuhan. Kami otomatis menghitung nominalnya dari pemasukanmu.
              </div>

              <div style={{ background: '#181d24', borderRadius: '22px', border: '1px solid rgba(255, 255, 255, 0.07)', overflow: 'hidden' }}>
                {state.categories.map((cat, idx) => {
                  const isOver = cat.spent > cat.monthlyBudget;

                  return (
                    <div 
                      key={cat.id}
                      style={{
                        padding: '14px 16px',
                        borderBottom: idx < state.categories.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none'
                      }}
                    >
                      {/* Top Row: Category Info & Calculated Nominal */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div 
                            style={{
                              width: '38px',
                              height: '38px',
                              borderRadius: '50%',
                              background: cat.iconBg,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {getCategoryIcon(cat.id)}
                          </div>

                          <div>
                            <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                              {cat.indonesianName}
                            </div>
                            <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                              Terpakai: Rp{cat.spent.toLocaleString('id-ID')}
                            </div>
                          </div>
                        </div>

                        {/* Calculated Rupiah Nominal based on Percentage */}
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff' }}>
                            Rp{cat.monthlyBudget.toLocaleString('id-ID')}
                          </div>
                          <div style={{ fontSize: '10px', color: isOver ? '#ff4343' : '#94a3b8' }}>
                            {isOver ? 'Melebihi budget' : `Sisa Rp${cat.remaining.toLocaleString('id-ID')}`}
                          </div>
                        </div>
                      </div>

                      {/* Interactive Percentage Adjuster Controls */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#1f2631', padding: '8px 12px', borderRadius: '14px' }}>
                        <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>Alokasi:</span>
                        
                        {/* Stepper Minus */}
                        <button
                          onClick={() => updateCategoryPercentage(cat.id, cat.percentage - 5)}
                          style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '8px',
                            background: '#2d3748',
                            border: 'none',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                          }}
                          title="Kurang 5%"
                        >
                          <Minus size={13} />
                        </button>

                        {/* Percentage Pill */}
                        <span style={{ minWidth: '40px', textAlign: 'center', fontSize: '13px', fontWeight: 800, color: '#38bdf8' }}>
                          {cat.percentage}%
                        </span>

                        {/* Stepper Plus */}
                        <button
                          onClick={() => updateCategoryPercentage(cat.id, cat.percentage + 5)}
                          style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '8px',
                            background: '#2d3748',
                            border: 'none',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer'
                          }}
                          title="Tambah 5%"
                        >
                          <Plus size={13} />
                        </button>

                        {/* Detail Formula Sheet Trigger */}
                        <button
                          onClick={() => openSheet('category-detail', cat.id)}
                          style={{
                            marginLeft: 'auto',
                            background: 'none',
                            border: 'none',
                            color: '#cbd3ddff',
                            fontSize: '11px',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                            cursor: 'pointer'
                          }}
                        >
                          <span>Detail Kuota</span>
                          <ChevronRight size={13} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DAILY SPENDING GUIDANCE (Hasil Perhitungan Alokasi) */}
            <div 
              style={{
                background: 'linear-gradient(135deg, #16202c 0%, #151a22 100%)',
                borderRadius: '20px',
                border: '1px solid rgba(0, 174, 214, 0.25)',
                padding: '16px',
                marginBottom: '16px'
              }}
            >
              {/* Header Row: Clean Title & Pill */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#ffffff' }}>
                  Simulasi Kuota Harian
                </span>
                <span 
                  style={{ 
                    fontSize: '10px', 
                    background: 'rgba(0, 174, 214, 0.15)', 
                    color: '#38bdf8', 
                    border: '1px solid rgba(0, 174, 214, 0.3)',
                    padding: '2px 8px', 
                    borderRadius: '999px', 
                    fontWeight: 700 
                  }}
                >
                  Hari Ini
                </span>
              </div>

              {/* Subtitle & Formula Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8', marginBottom: '14px' }}>
                <span>Sisa alokasi September 2026</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                <div 
                  onClick={() => openSheet('category-detail', 'food')}
                  style={{ background: '#1c2430', borderRadius: '14px', padding: '10px 8px', border: '1px solid rgba(255, 255, 255, 0.05)', cursor: 'pointer' }}
                >
                  <div style={{ fontSize: '10px', color: '#cbd5e1', fontWeight: 600, marginBottom: '2px' }}>Makanan</div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                    Rp{foodCat ? foodCat.todayRemaining.toLocaleString('id-ID') : '40.000'}
                  </div>
                  <div style={{ fontSize: '9px', color: '#64748b' }}>Sisa hari ini</div>
                </div>

                <div 
                  onClick={() => openSheet('category-detail', 'transport')}
                  style={{ background: '#1c2430', borderRadius: '14px', padding: '10px 8px', border: '1px solid rgba(255, 255, 255, 0.05)', cursor: 'pointer' }}
                >
                  <div style={{ fontSize: '10px', color: '#cbd5e1', fontWeight: 600, marginBottom: '2px' }}>Transport</div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>Rp17.000</div>
                  <div style={{ fontSize: '9px', color: '#64748b' }}>Sisa hari ini</div>
                </div>

                <div 
                  onClick={() => openSheet('category-detail', 'shopping')}
                  style={{ background: '#1c2430', borderRadius: '14px', padding: '10px 8px', border: '1px solid rgba(255, 255, 255, 0.05)', cursor: 'pointer' }}
                >
                  <div style={{ fontSize: '10px', color: '#cbd5e1', fontWeight: 600, marginBottom: '2px' }}>Belanja</div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>Rp18.000</div>
                  <div style={{ fontSize: '9px', color: '#64748b' }}>Sisa hari ini</div>
                </div>
              </div>
            </div>

            {/* CONTEXTUAL RECOMMENDATION */}
            <div 
              style={{
                background: '#181d24',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                padding: '14px 16px',
                marginBottom: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={16} color="#00aed6" />
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                    Rekomendasi Hemat Buat Kamu
                  </span>
                </div>
                <span style={{ fontSize: '10px', color: '#00aed6', fontWeight: 700 }}>
                  Pas Budget
                </span>
              </div>


              <div 
                onClick={() => openSheet('recommendations')}
                style={{
                  background: '#1f2631',
                  borderRadius: '16px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  border: '1px solid rgba(0, 174, 214, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(255, 77, 79, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Utensils size={18} color="#ff4d4f" />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                      {foodCat && foodCat.todayRemaining >= 18000
                        ? 'Sei Sapi Sambal Matah'
                        : foodCat && foodCat.todayRemaining > 0
                        ? 'Paket Nasi Kulit Crispy Hemat'
                        : 'Voucher GoFood Diskon 50%'}
                    </div>
                    <div style={{ fontSize: '11px', color: '#00d618', fontWeight: 700 }}>
                      {foodCat && foodCat.todayRemaining >= 18000
                        ? 'Rp18.000 '
                        : foodCat && foodCat.todayRemaining > 0
                        ? `Rp${Math.min(12000, foodCat.todayRemaining).toLocaleString('id-ID')} `
                        : 'Klaim Gratis '}
                      <span style={{ color: '#94a3b8', fontWeight: 400 }}>• ⭐ 4.8</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '11.5px', fontWeight: 700 }}>
                  <span>Lihat rekomendasi</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>

            {/* RIWAYAT PEMASUKAN (Income Transactions) */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>
                  Riwayat pemasukan
                </span>
                <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>
                  +{state.incomeTransactions.length} transaksi masuk
                </span>
              </div>

              <div style={{ background: '#181d24', borderRadius: '22px', border: '1px solid rgba(255, 255, 255, 0.07)', overflow: 'hidden' }}>
                {state.incomeTransactions.map((tx, idx) => (
                  <div 
                    key={tx.id}
                    style={{
                      padding: '14px 16px',
                      borderBottom: idx < state.incomeTransactions.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 214, 24, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ArrowDown size={19} color="#00d618" />
                      </div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                          {tx.merchant}
                        </div>
                        <div style={{ fontSize: '10.5px', color: '#94a3b8' }}>
                          {tx.subtext} • {tx.dateStr}
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                        +Rp{tx.amount.toLocaleString('id-ID')}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', fontSize: '9.5px', color: '#38bdf8' }}>
                        <span>{tx.paymentMethod}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPage;

import React from 'react';
import { useBudget } from '../context/BudgetContext';
import { 
  X, 
  Utensils, 
  Car, 
  ShoppingBag, 
  Shirt, 
  ArrowUpRight, 
  Calendar, 
  Sparkles, 
  AlertTriangle, 
  SlidersHorizontal,
  ChevronRight,
  Info
} from 'lucide-react';
import { CategoryId } from '../types/budget';

export const CategoryDetailSheet: React.FC = () => {
  const { state, closeSheet, openSheet } = useBudget();

  const selectedId = state.selectedCategoryForDetail || 'food';
  const category = state.categories.find(c => c.id === selectedId) || state.categories[0];

  const getCategoryIcon = (id: CategoryId) => {
    switch (id) {
      case 'food': return <Utensils size={22} color="#ffffff" />;
      case 'general': return <ArrowUpRight size={22} color="#ffffff" />;
      case 'transport': return <Car size={22} color="#ffffff" />;
      case 'shopping': return <ShoppingBag size={22} color="#ffffff" />;
      case 'lifestyle': return <Shirt size={22} color="#ffffff" />;
      default: return <ArrowUpRight size={22} color="#ffffff" />;
    }
  };

  const isOverBudget = category.spent > category.monthlyBudget;
  const pctSpent = Math.min(100, Math.round((category.spent / category.monthlyBudget) * 100));

  return (
    <>
      <div className="bottom-sheet-backdrop" onClick={closeSheet} />
      <div className="bottom-sheet-content">
        <div className="sheet-handle-bar" />

        {/* Sheet Header */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px 10px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div 
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: category.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {getCategoryIcon(category.id)}
            </div>
            <div>
              <div style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff' }}>
                {category.indonesianName}
              </div>
              <div style={{ fontSize: '11.5px', color: '#94a3b8' }}>
                Alokasi {category.percentage}% dari budget bulanan
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

        {/* Sheet Scrollable Body */}
        <div style={{ padding: '16px 20px 30px', overflowY: 'auto' }}>
          {/* Over Budget Notice if applicable */}
          {isOverBudget && (
            <div 
              style={{
                background: 'rgba(255, 67, 67, 0.15)',
                border: '1px solid rgba(255, 67, 67, 0.4)',
                borderRadius: '16px',
                padding: '12px 14px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={18} color="#ff4343" />
                <div style={{ fontSize: '12px', color: '#ff7070', fontWeight: 700 }}>
                  Lebih Rp{(category.spent - category.monthlyBudget).toLocaleString('id-ID')}
                </div>
              </div>
              <button 
                onClick={() => openSheet('reallocate')}
                style={{
                  background: '#ff4343',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '4px 12px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                Atur Ulang
              </button>
            </div>
          )}

          {/* Monthly Budget Summary Box */}
          <div 
            style={{
              background: '#1b2129',
              borderRadius: '18px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '14px 16px',
              marginBottom: '16px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>Sisa budget bulan ini</div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: isOverBudget ? '#ff4343' : '#00d618' }}>
                  Rp{category.remaining.toLocaleString('id-ID')}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Total Alokasi</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                  Rp{category.monthlyBudget.toLocaleString('id-ID')}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div style={{ height: '6px', background: '#252d38', borderRadius: '999px', overflow: 'hidden', marginBottom: '6px' }}>
              <div 
                style={{
                  width: `${pctSpent}%`,
                  height: '100%',
                  background: isOverBudget ? '#ff4343' : category.iconBg,
                  borderRadius: '999px'
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#94a3b8' }}>
              <span>Terpakai: Rp{category.spent.toLocaleString('id-ID')}</span>
              <span>{pctSpent}% terpakai</span>
            </div>
          </div>

          {/* CORE FEATURE: DETAILED DAILY BUDGET GUIDANCE */}
          <div 
            style={{
              background: '#19222e',
              borderRadius: '18px',
              border: '1px solid rgba(0, 174, 214, 0.3)',
              padding: '16px',
              marginBottom: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={16} color="#00aed6" />
                <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#ffffff' }}>
                  Simulasi Budget Harian
                </span>
              </div>
              <span style={{ fontSize: '10.5px', background: 'rgba(0, 174, 214, 0.2)', color: '#38bdf8', padding: '2px 8px', borderRadius: '999px', fontWeight: 700 }}>
                Hari ini: Weekday
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '12px' }}>
              <div style={{ background: '#131a24', padding: '10px 8px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '9.5px', color: '#94a3b8' }}>Budget Hari Ini</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                  Rp{category.dailyAllowance.toLocaleString('id-ID')}
                </div>
              </div>

              <div style={{ background: '#131a24', padding: '10px 8px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '9.5px', color: '#94a3b8' }}>Sudah Dipakai</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#cbd5e1' }}>
                  Rp{category.todaySpent.toLocaleString('id-ID')}
                </div>
              </div>

              <div style={{ background: '#131a24', padding: '10px 8px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '9.5px', color: '#94a3b8' }}>Sisa Hari Ini</div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#00d618' }}>
                  Rp{category.todayRemaining.toLocaleString('id-ID')}
                </div>
              </div>
            </div>

            {/* Formula Explanation Note */}
            <div 
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
                borderRadius: '12px',
                padding: '10px 12px',
                fontSize: '11px',
                color: '#94a3b8',
                lineHeight: 1.45
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#38bdf8', fontWeight: 700, marginBottom: '4px' }}>
                <Info size={13} />
                <span>Logika Alokasi Harian (September 2026):</span>
              </div>
              • <strong>Weekday allowance:</strong> ~Rp{category.weekdayAllowance.toLocaleString('id-ID')} (Bobot 1.0)<br />
              • <strong>Weekend allowance:</strong> ~Rp{category.weekendAllowance.toLocaleString('id-ID')} (Bobot 1.25)<br />
              Sisa 15 hari weekday & 5 hari weekend dihitung otomatis agar kamu tidak kehabisan budget sebelum gajian!
            </div>
          </div>

          {/* Contextual Recommendation Callout */}
          <div 
            style={{
              background: '#1b2129',
              borderRadius: '18px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '14px 16px',
              marginBottom: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <Sparkles size={15} color="#00d618" />
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff' }}>
                Rekomendasi Sesuai Budget
              </span>
            </div>

            <div style={{ fontSize: '11px', color: '#cbd5e1', marginBottom: '10px' }}>
              {category.todayRemaining > 0
                ? `"Masih punya Rp${category.todayRemaining.toLocaleString('id-ID')} untuk ${category.indonesianName.toLowerCase()} hari ini."`
                : `"Budget ${category.indonesianName.toLowerCase()} hari ini sudah terpakai penuh (Rp0)."`}
            </div>

            <div 
              onClick={() => openSheet('recommendations')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#222933',
                padding: '10px 14px',
                borderRadius: '14px',
                cursor: 'pointer'
              }}
            >
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff' }}>
                  {category.id === 'food'
                    ? (category.todayRemaining >= 18000 ? 'Sei Sapi Sambal Matah • Rp18.000' : category.todayRemaining > 0 ? `Paket Nasi Kulit • Rp${Math.min(12000, category.todayRemaining).toLocaleString('id-ID')}` : 'Voucher Diskon GoFood 50% • Gratis')
                    : category.id === 'transport'
                    ? (category.todayRemaining >= 12000 ? 'GoRide Hemat • Mulai Rp12.000' : 'Voucher Diskon GoRide • Gratis')
                    : 'Promo Pilihan Sesuai Sisa Budget'}
                </div>
                <div style={{ fontSize: '10px', color: '#00d618' }}>⭐ 4.8 • Pas di sisa kuota harian</div>
              </div>
              <ChevronRight size={16} color="#00d618" />
            </div>
          </div>

          {/* Actions at Bottom of Sheet */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={() => openSheet('reallocate')}
              style={{
                flex: 1,
                background: 'rgba(0, 174, 214, 0.15)',
                border: '1px solid rgba(0, 174, 214, 0.3)',
                borderRadius: '14px',
                padding: '12px',
                color: '#38bdf8',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <SlidersHorizontal size={15} />
              <span>Atur Ulang Budget</span>
            </button>

            <button 
              onClick={closeSheet}
              style={{
                flex: 1,
                background: '#00aa13',
                border: 'none',
                borderRadius: '14px',
                padding: '12px',
                color: '#ffffff',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetailSheet;

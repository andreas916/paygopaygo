import React from 'react';
import { useBudget } from '../context/BudgetContext';
import { 
  X, 
  Sparkles, 
  Star, 
  ChevronRight
} from 'lucide-react';

export const RecommendationSheet: React.FC = () => {
  const { state, closeSheet, simulateGoFoodTransaction } = useBudget();

  const handleOrderRecommendation = () => {
    simulateGoFoodTransaction();
    closeSheet();
  };

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
                background: 'rgba(0, 174, 214, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00aed6'
              }}
            >
              <Sparkles size={18} />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff' }}>
                Rekomendasi Hemat Buat Kamu
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                Dipilih otomatis sesuai sisa kuota harian & mingguan
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

        {/* List of Recommendations */}
        <div style={{ padding: '16px 20px 30px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {state.recommendations.map(rec => (
            <div 
              key={rec.id}
              style={{
                background: '#1a2028',
                borderRadius: '18px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '14px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                    <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#ffffff' }}>
                      {rec.itemName}
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                    {rec.merchantName} • {rec.distance}
                  </div>
                </div>

                <div 
                  style={{
                    background: 'rgba(0, 170, 19, 0.15)',
                    color: '#00d618',
                    fontSize: '10px',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '999px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {rec.badge}
                </div>
              </div>

              {/* Price & Rating */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '4px 0' }}>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#00d618' }}>
                  Rp{rec.price.toLocaleString('id-ID')}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: '#f59e0b', fontWeight: 700 }}>
                  <Star size={12} fill="#f59e0b" />
                  <span>{rec.rating}</span>
                </div>
              </div>

              {/* Reason why it's recommended */}
              <div 
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  padding: '8px 10px',
                  borderRadius: '10px',
                  fontSize: '11px',
                  color: '#cbd5e1'
                }}
              >
                💡 {rec.reason}
              </div>

              {/* Order / Simulate Button */}
              <button 
                onClick={handleOrderRecommendation}
                style={{
                  marginTop: '4px',
                  background: '#00aed6',
                  color: '#091017',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '10px',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <span>Pesan Sekarang & Simulasikan</span>
                <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendationSheet;

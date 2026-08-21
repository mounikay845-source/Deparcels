import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const OrdersView = ({ onGoHome }) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const sampleOrders = [
    {
      id: 'DP-8921',
      category: 'active',
      type: t('food_pickup_type'),
      icon: 'fa-utensils',
      iconBg: 'rgba(255, 107, 0, 0.15)',
      iconColor: '#FF6B00',
      store: 'Bawarchi Biryani, RTC X Roads',
      drop: 'Home - Flat 402, Green Towers',
      status: t('rider_on_way'),
      statusBg: 'rgba(34, 197, 94, 0.15)',
      statusColor: '#22c55e',
      time: `12 ${t('mins_ago')}`,
      amount: '₹340',
      items: t('item_food_sample')
    },
    {
      id: 'DP-8804',
      category: 'completed',
      type: t('medicine_express_type'),
      icon: 'fa-capsules',
      iconBg: 'rgba(59, 130, 246, 0.15)',
      iconColor: '#3b82f6',
      store: 'Apollo Pharmacy, Jubilee Hills',
      drop: 'Office - Cyber Towers, Hitech City',
      status: t('status_delivered'),
      statusBg: 'rgba(156, 163, 175, 0.15)',
      statusColor: '#9ca3af',
      time: `${t('yesterday')}, 4:30 PM`,
      amount: '₹180',
      items: t('item_med_sample')
    },
    {
      id: 'DP-8762',
      category: 'completed',
      type: t('send_documents_type'),
      icon: 'fa-file-lines',
      iconBg: 'rgba(168, 85, 247, 0.15)',
      iconColor: '#a855f7',
      store: 'Regus Office, Gachibowli',
      drop: 'SBI Main Branch, Koti',
      status: t('status_delivered'),
      statusBg: 'rgba(156, 163, 175, 0.15)',
      statusColor: '#9ca3af',
      time: '18 Aug 2026',
      amount: '₹120',
      items: t('item_doc_sample')
    }
  ];

  const filteredOrders = sampleOrders.filter(order => {
    if (filter === 'active') return order.category === 'active';
    if (filter === 'completed') return order.category === 'completed';
    return true;
  });

  return (
    <div className="view-container orders-view-container" style={{ width: '100%', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, marginBottom: 16 }}>
        <div>
          <h1 className="greeting-title" style={{ fontSize: 24, fontWeight: 900 }} dangerouslySetInnerHTML={{ __html: t('your_orders_title') }}></h1>
          <p className="subtitle" style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{t('orders_sub')}</p>
        </div>
      </div>

      <div className="filter-row orders-filter-row" style={{ width: '100%', display: 'flex', gap: 8, marginBottom: 16 }}>
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
          style={{ flex: 1, padding: '11px 4px', fontSize: 11, fontWeight: 800 }}
        >
          {t('all_orders')} ({sampleOrders.length})
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
          style={{ flex: 1, padding: '11px 4px', fontSize: 11, fontWeight: 800 }}
        >
          {t('active_orders')} (1)
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
          style={{ flex: 1, padding: '11px 4px', fontSize: 11, fontWeight: 800 }}
        >
          {t('completed_orders')} (2)
        </button>
      </div>

      {filteredOrders.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="order-card-item"
              style={{
                width: '100%',
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: 18,
                padding: 16,
                boxSizing: 'border-box',
                transition: 'all 0.25s ease'
              }}
            >
              {/* Top Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: order.iconBg,
                      color: order.iconColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18
                    }}
                  >
                    <i className={`fa-solid ${order.icon}`}></i>
                  </div>
                  <div>
                    <strong style={{ fontSize: 14, color: 'var(--text-main)', display: 'block' }}>{order.type}</strong>
                    <span style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 700 }}>ID: {order.id} • {order.time}</span>
                  </div>
                </div>

                <span
                  style={{
                    background: order.statusBg,
                    color: order.statusColor,
                    fontSize: 10,
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: 20,
                    letterSpacing: 0.5
                  }}
                >
                  ● {order.status}
                </span>
              </div>

              {/* Order Locations */}
              <div style={{ background: 'var(--input-bg)', borderRadius: 12, padding: '10px 12px', marginBottom: 12, border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text-main)', marginBottom: 6 }}>
                  <i className="fa-solid fa-circle-dot" style={{ color: '#22c55e', fontSize: 10 }}></i>
                  <span style={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{order.store}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text-main)' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: 'var(--primary-orange-light)', fontSize: 10 }}></i>
                  <span style={{ fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{order.drop}</span>
                </div>
              </div>

              {/* Items Summary & Price */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 4 }}>
                <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, maxWidth: '70%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {order.items}
                </span>
                <strong style={{ fontSize: 16, color: 'var(--primary-orange-light)', fontWeight: 900 }}>{order.amount}</strong>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state orders-empty-state" style={{ width: '100%', boxSizing: 'border-box' }}>
          <i className="fa-solid fa-box-open empty-icon"></i>
          <h3 style={{ fontSize: 15 }}>{t('no_active_orders')}</h3>
          <p className="start-order-text" onClick={onGoHome}>
            {t('start_ordering')}
          </p>
        </div>
      )}
    </div>
  );
};
